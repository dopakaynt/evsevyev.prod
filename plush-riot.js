(() => {
  'use strict';

  const hero = document.querySelector('#hero');
  const ball = hero?.querySelector('#plush-ball');
  if (!ball || !Element.prototype.animate) return;

  const textSurfaces = hero.querySelectorAll('.wall-title, .wall-subtitle, .wall-footer > span');
  const actions = [...hero.querySelectorAll('.wall-actions .btn')];
  const quiet = window.matchMedia('(prefers-reduced-motion: reduce)');
  const range = document.createRange();
  const ink = document.createElement('canvas').getContext('2d');
  const clamp = (value, min, max) => Math.min(Math.max(value, min), Math.max(min, max));
  const throwWindow = 30_000;
  let previousThrow = -Infinity;
  let pendingThrow;
  let angryTimer;
  let launchTimer;
  let windup = false;
  let scene;

  function textFrame({ text, start, end }) {
    range.setStart(text, start);
    range.setEnd(text, end);
    return range.getBoundingClientRect();
  }

  function contactBounds(piece, rect, parent) {
    let left = rect.left;
    let right = rect.right;
    let top = rect.top;
    let bottom = rect.bottom;
    if (piece.text && ink) {
      const style = getComputedStyle(piece.text.parentElement);
      ink.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      const metrics = ink.measureText(style.textTransform === 'uppercase' ? piece.letter.toUpperCase() : piece.letter);
      const fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
      if (fontHeight > 0 && metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent > 0) {
        const scale = rect.height / fontHeight;
        const baseline = rect.top + metrics.fontBoundingBoxAscent * scale;
        top = baseline - metrics.actualBoundingBoxAscent * scale;
        bottom = baseline + metrics.actualBoundingBoxDescent * scale;
        left = rect.left - (metrics.actualBoundingBoxLeft || 0);
        right = rect.left + (metrics.actualBoundingBoxRight || rect.width);
      }
    }
    return {
      id: piece.id,
      left: clamp(left - parent.left, 0, parent.width),
      right: clamp(right - parent.left, 0, parent.width),
      top: clamp(top - parent.top, 0, parent.height),
      bottom: clamp(bottom - parent.top, 0, parent.height)
    };
  }

  function locate(piece, parent, fadeHeight) {
    const rect = piece.text ? textFrame(piece) : piece.source.getBoundingClientRect();
    piece.frame = {
      x: rect.left - parent.left, y: rect.top - parent.top,
      width: rect.width, height: rect.height
    };
    piece.target = contactBounds(piece, rect, parent);
    const { left, right, top, bottom } = piece.target;
    piece.visible = rect.width > 0 && rect.height > 0 && right > left && bottom > top;
    if (!piece.control) {
      piece.glyph.toggleAttribute('hidden', !piece.visible);
      piece.glyph.style.left = `${piece.frame.x}px`;
      piece.glyph.style.top = `${piece.frame.y}px`;
      if (piece.footer && fadeHeight > 0) {
        // These captions start below the hero fade. Carry their original tone
        // into the foreground layer without dimming the other debris.
        const depth = clamp(1 - (parent.bottom - rect.top - rect.height / 2) / fadeHeight, 0, 1);
        const shade = depth <= .55 ? depth / .55 * .48 : .48 + (depth - .55) / .45 * .52;
        piece.glyph.style.opacity = (1 - shade).toFixed(3);
      }
      if (piece.text) piece.glyph.style.lineHeight = `${rect.height}px`;
      else {
        piece.glyph.style.width = `${rect.width}px`;
        piece.glyph.style.height = `${rect.height}px`;
      }
    }
  }

  function makeDebris() {
    const bounds = hero.getBoundingClientRect();
    const fadeHeight = Number.parseFloat(getComputedStyle(hero, '::after').height);
    const layer = document.createElement('div');
    layer.className = 'plush-debris';
    layer.setAttribute('aria-hidden', 'true');
    const pieces = [];

    function add(piece) {
      piece.id = pieces.length;
      locate(piece, bounds, fadeHeight);
      pieces.push(piece);
      if (!piece.control) layer.append(piece.glyph);
    }

    for (const surface of textSurfaces) {
      const footer = Boolean(surface.closest('.wall-footer'));
      const walker = document.createTreeWalker(surface, NodeFilter.SHOW_TEXT);
      for (let text = walker.nextNode(); text; text = walker.nextNode()) {
        if (text.parentElement.closest('#plush-ball')) continue;
        const style = getComputedStyle(text.parentElement);
        for (const char of text.data.matchAll(/\S/gu)) {
          const letter = char[0];
          const glyph = document.createElement('span');
          glyph.textContent = letter;
          Object.assign(glyph.style, {
            fontFamily: style.fontFamily, fontSize: style.fontSize,
            fontWeight: style.fontWeight, fontStyle: style.fontStyle,
            color: style.color, letterSpacing: style.letterSpacing,
            textTransform: style.textTransform, textShadow: style.textShadow
          });
          add({ glyph, letter, text, footer, start: char.index, end: char.index + letter.length });
        }
      }
      for (const source of surface.querySelectorAll('.site-icon')) {
        const glyph = source.cloneNode(true);
        glyph.style.color = getComputedStyle(source).color;
        add({ glyph, source, footer });
      }
    }
    actions.forEach((source, index) => add({ source, index, control: true }));
    return { layer, pieces, width: bounds.width, height: bounds.height };
  }

  function pendingTargets() {
    return scene.pieces.filter(piece => piece.visible && !piece.hit).map(piece => piece.target);
  }

  function throwTransform(x, y, angle) {
    return `translate3d(${x}px,${y}px,0) rotate(${angle}deg)`;
  }

  const fallGravity = 2100;
  const floorGap = 22;
  const radians = Math.PI / 180;

  function rotatedExtent(width, height, angle) {
    const cos = Math.abs(Math.cos(angle * radians));
    const sin = Math.abs(Math.sin(angle * radians));
    return { x: (width * cos + height * sin) / 2, y: (width * sin + height * cos) / 2 };
  }

  function restingPlace(piece, aim, angle) {
    const { left, right, top, bottom } = piece.target;
    const extent = rotatedExtent(right - left, bottom - top, angle);
    const floor = scene.height - floorGap;
    let best;
    const stride = Math.max(5, extent.x * .75);
    for (let step = -11; step <= 11; step += 1) {
      const x = clamp(aim + step * stride, extent.x + 4, scene.width - extent.x - 4);
      let support = floor;
      for (const other of scene.rests) {
        if (Math.abs(x - other.x) < extent.x + other.extent.x - 1) {
          support = Math.min(support, other.y - other.extent.y);
        }
      }
      const score = (floor - support) * 3 + Math.abs(x - aim);
      if (!best || score < best.score) best = { x, y: support - extent.y, support, extent, score };
    }
    scene.rests.push(best);
    return best;
  }

  function scatter(piece, contact) {
    const { glyph, frame } = piece;
    const { left, right, top, bottom } = piece.target;
    const startX = (left + right) / 2;
    const startY = (top + bottom) / 2;
    const pivotX = startX - frame.x;
    const pivotY = startY - frame.y;
    const side = Math.sign(contact.vx) || (startX >= contact.x ? 1 : -1);
    const spread = Math.min(122, scene.width * .16);
    const small = bottom - top < 29;
    const angle = (small ? 0 : Math.round(Math.random() * 3) * 90) + side * (5 + Math.random() * 13);
    const rest = restingPlace(piece, startX + side * spread * (.4 + Math.random() * .6), angle);
    const dy = rest.y - startY;
    const lift = Math.max(15, -dy + 11) + (small ? 0 : 10);
    const launch = Math.sqrt(2 * fallGravity * lift);
    const fall = (launch + Math.sqrt(Math.max(0, launch * launch + 2 * fallGravity * dy))) / fallGravity;
    const rebound = Math.min(86, Math.sqrt(Math.max(0, launch * launch + 2 * fallGravity * dy)) * .14);
    const bounceTime = 2 * rebound / fallGravity;
    const frames = [];
    const total = fall + bounceTime;
    glyph.style.transformOrigin = `${pivotX}px ${pivotY}px`;

    for (let i = 0; i <= 18; i += 1) {
      const t = fall * i / 18;
      const progress = t / fall;
      const roll = angle * (1 - (1 - progress) ** 1.4);
      const extent = rotatedExtent(right - left, bottom - top, roll);
      const y = i === 0 ? startY : Math.min(startY - launch * t + fallGravity * t * t / 2, rest.support - extent.y);
      frames.push({ offset: t / total, transform: throwTransform((rest.x - startX) * progress, y - startY, roll) });
    }
    for (let i = 1; i <= 5; i += 1) {
      const t = bounceTime * i / 5;
      const y = rest.y - rebound * t + fallGravity * t * t / 2;
      frames.push({ offset: (fall + t) / total, transform: throwTransform(rest.x - startX, y - startY, angle) });
    }

    piece.landing = {
      fraction: rest.x / scene.width, bottom: scene.height - rest.y - frame.height + pivotY,
      angle, pivotX
    };
    piece.animation = glyph.animate(frames, { duration: total * 1000, fill: 'forwards' });
  }

  function actionLanding(button, index) {
    const world = hero.getBoundingClientRect();
    const bounds = button.getBoundingClientRect();
    const compact = world.width < 768;
    const side = index === 0 ? -1 : 1;
    const margin = compact ? 12 : 30;
    const center = world.width * (index === 0 ? .24 : .76);
    const left = clamp(center - bounds.width / 2, margin, world.width - bounds.width - margin);
    const angle = side * (compact ? 5 : 9);
    const extent = rotatedExtent(bounds.width, bounds.height, angle);
    return {
      x: left - (bounds.left - world.left),
      y: world.height - floorGap - extent.y - (bounds.top - world.top + bounds.height / 2),
      angle
    };
  }

  function dropAction(piece) {
    piece.source.dataset.plushFallen = '';
    const { x, y, angle } = actionLanding(piece.source, piece.index);
    piece.animation = piece.source.animate([
      { transform: 'none', offset: 0, easing: 'ease-out' },
      { transform: throwTransform(x * .38, -19, angle * 2), offset: .29, easing: 'cubic-bezier(.65,.03,.99,.66)' },
      { transform: throwTransform(x, y, angle * .9), offset: .8, easing: 'ease-out' },
      { transform: throwTransform(x, y - 11, angle * 1.2), offset: .91, easing: 'ease-in' },
      { transform: throwTransform(x, y, angle), offset: 1 }
    ], { duration: 780, fill: 'forwards' });
  }

  function settleActions() {
    const fallen = scene.pieces.filter(piece => piece.control && piece.hit);
    for (const piece of fallen) {
      piece.animation?.cancel();
      piece.source.style.transform = 'none';
    }
    const offsets = fallen.map(piece => actionLanding(piece.source, piece.index));
    fallen.forEach(({ source }, index) => {
      const { x, y, angle } = offsets[index];
      source.style.transform = throwTransform(x, y, angle);
    });
  }

  function signal(name, detail) {
    ball.dispatchEvent(new CustomEvent(name, { detail }));
  }

  async function settle() {
    if (!scene || scene.finishing || scene.settled || pendingTargets().length) return;
    scene.finishing = true;
    await Promise.allSettled(scene.pieces.filter(piece => piece.animation).map(piece => piece.animation.finished));
    scene.settled = true;
    for (const piece of scene.pieces) {
      if (piece.control || !piece.landing) continue;
      const { fraction, bottom, angle, pivotX } = piece.landing;
      Object.assign(piece.glyph.style, {
        left: `calc(${fraction * 100}% - ${pivotX}px)`,
        top: 'auto',
        bottom: `${bottom}px`,
        transform: `rotate(${angle}deg)`
      });
      piece.animation?.cancel();
    }
    settleActions();
    hero.dataset.plushRuined = '';
    ball.dataset.riot = 'gloat';
    signal('plush:riot', { active: false, destroyed: true });
    window.setTimeout(() => { delete ball.dataset.riot; }, 1250);
  }

  function start() {
    const debris = makeDebris();
    scene = { ...debris, rests: [], settled: false, finishing: false };
    windup = false;
    delete ball.dataset.temper;
    hero.append(debris.layer);
    hero.dataset.plushRiot = '';
    ball.dataset.riot = 'rampage';
    signal('plush:riot', { active: true, targets: pendingTargets() });
  }

  function clearTemper() {
    clearTimeout(angryTimer);
    clearTimeout(launchTimer);
    launchTimer = 0;
    delete ball.dataset.temper;
  }

  function canWindUp() {
    return windup && !quiet.matches && !document.hidden && !ball.hidden
      && !ball.hasAttribute('data-offstage') && !ball.hasAttribute('data-dragging')
      && !ball.hasAttribute('data-active');
  }

  function queueRiot() {
    if (launchTimer || !canWindUp()) return;
    ball.dataset.temper = 'furious';
    launchTimer = window.setTimeout(() => {
      launchTimer = 0;
      if (canWindUp()) start();
    }, 760);
  }

  ball.addEventListener('plush:throw', ({ detail: { id } }) => {
    if (scene || windup || quiet.matches) return;
    clearTemper();
    const now = performance.now();
    pendingThrow = { id, second: now - previousThrow <= throwWindow };
    previousThrow = now;
  });

  ball.addEventListener('plush:throw-landed', ({ detail: { id } }) => {
    if (id !== pendingThrow?.id) return;
    const second = pendingThrow.second;
    pendingThrow = null;
    if (second) {
      windup = true;
      queueRiot();
    } else if (!quiet.matches && !ball.hasAttribute('data-offstage')) {
      ball.dataset.temper = 'annoyed';
      angryTimer = window.setTimeout(() => { delete ball.dataset.temper; }, 1280);
    }
  });

  ball.addEventListener('plush:smash', ({ detail }) => {
    const piece = scene?.pieces[detail.id];
    if (!piece?.visible || piece.hit) return;
    piece.hit = true;
    if (piece.control) dropAction(piece);
    else scatter(piece, detail);
  });

  ball.addEventListener('plush:riot-done', settle);
  new MutationObserver(() => {
    if (!canWindUp()) {
      clearTimeout(launchTimer);
      launchTimer = 0;
      if (windup) delete ball.dataset.temper;
    } else {
      queueRiot();
    }
  }).observe(ball, { attributeFilter: ['data-offstage', 'data-active', 'data-dragging', 'hidden'] });
  document.addEventListener('visibilitychange', queueRiot);
  quiet.addEventListener('change', () => {
    windup = false;
    pendingThrow = null;
    previousThrow = -Infinity;
    clearTemper();
  });
  window.addEventListener('resize', () => {
    if (!scene) return;
    const bounds = hero.getBoundingClientRect();
    if (Math.abs(bounds.width - scene.width) < 1 && Math.abs(bounds.height - scene.height) < 1) return;
    scene.width = bounds.width;
    scene.height = bounds.height;
    if (scene.settled) {
      settleActions();
    } else if (!scene.finishing) {
      const fadeHeight = Number.parseFloat(getComputedStyle(hero, '::after').height);
      for (const piece of scene.pieces) {
        if (!piece.hit) locate(piece, bounds, fadeHeight);
      }
      signal('plush:riot-layout', { targets: pendingTargets() });
    }
  }, { passive: true });
})();
