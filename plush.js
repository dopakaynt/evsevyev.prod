(() => {
  'use strict';

  const hero = document.querySelector('#hero');
  const ball = hero?.querySelector('#plush-ball');
  if (!ball) return;

  const title = hero.querySelector('.wall-title');
  const kicker = hero.querySelector('.wall-kicker');
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('#navMenu');
  const controls = [...hero.querySelectorAll('.wall-actions a, .wall-actions button, .wall-motion')];
  const copy = [...hero.querySelectorAll('.wall-subtitle, .wall-footer > span')];
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const ticker = window.gsap?.ticker;
  const range = document.createRange();
  const canvasText = document.createElement('canvas').getContext('2d');
  const graphemes = typeof Intl.Segmenter === 'function'
    ? new Intl.Segmenter(document.documentElement.lang, { granularity: 'grapheme' })
    : null;
  const inkCache = new Map();
  const gravity = 1150;
  const maxSpeed = 1650;
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const mobileSeat = hero.querySelector('.plush-mobile-seat')?.getBoundingClientRect();
  const signatureStart = Boolean(mobileSeat?.width);
  const mount = ball.parentElement !== hero
    ? (signatureStart ? mobileSeat : ball.getBoundingClientRect()) : null;
  const mountOrigin = mount && hero.getBoundingClientRect();
  const mountCenter = mount && {
    x: mount.left + mount.width * 0.5 - mountOrigin.left - hero.clientLeft,
    y: mount.top + mount.height * 0.5 - mountOrigin.top - hero.clientTop
  };
  if (mount) hero.append(ball);
  hero.dataset.plushMounted = '';

  let world;
  let colliders = [];
  let titleBoxes = [];
  let headlineBoxes = [];
  let goldBoxes = [];
  let kickerBoxes = [];
  let finalPerches = [];
  let standingBoxes = [];
  let controlTop;
  let radius = 29;
  let x = 0;
  let y = 0;
  let vx = 0;
  let vy = 0;
  let angle = 0;
  let squash = 0;
  let squashSpeed = 0;
  let squashX = 0;
  let squashY = 1;
  let impact = 0;
  let grounded = false;
  let stillTime = 0;
  let moving = false;
  let drag = null;
  let placed = false;
  let used = false;
  let sceneDirty = true;
  let poseDirty = false;
  let frame = 0;
  let lastFrame = 0;
  let lastMeasure = -Infinity;
  let inView = false;
  let paused = true;
  let titleEntering = false;
  let intent = null;
  let target = null;
  let perchTimer = 0;
  let glanceTimer = 0;
  let hovered = false;
  let riot = null;
  let riotActive = false;
  let ruined = hero.hasAttribute('data-plush-ruined');
  let pendingThrow = null;
  let throwId = 0;

  function heroOrigin() {
    const rect = hero.getBoundingClientRect();
    return { left: rect.left + hero.clientLeft, top: rect.top + hero.clientTop };
  }

  function visible(element) {
    if (element.checkVisibility) {
      return element.checkVisibility({ opacityProperty: true, visibilityProperty: true });
    }
    const style = getComputedStyle(element);
    return style.visibility === 'visible' && style.opacity !== '0' && element.getClientRects().length > 0;
  }

  function addCollider(bounds, origin, padding = 0) {
    const left = Math.max(0, bounds.left - origin.left - padding);
    const right = Math.min(world.width, bounds.right - origin.left + padding);
    const top = Math.max(0, bounds.top - origin.top - padding);
    const bottom = Math.min(world.height, bounds.bottom - origin.top + padding);
    if (right - left <= 0.75 || bottom - top <= 0.75) return null;

    const box = { left, right, top, bottom };
    colliders.push(box);
    return box;
  }

  // Use the browser's per-letter positions with the font's visible ink bounds.
  function inkRect(text, bounds, style) {
    if (!canvasText) return bounds;

    const font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    const glyph = style.textTransform === 'uppercase' ? text.toLocaleUpperCase() : text;
    const key = `${font}\u0000${glyph}`;
    let metrics = inkCache.get(key);
    if (!metrics) {
      canvasText.font = font;
      metrics = canvasText.measureText(glyph);
      inkCache.set(key, metrics);
    }

    const {
      width, fontBoundingBoxAscent, fontBoundingBoxDescent, actualBoundingBoxLeft,
      actualBoundingBoxRight, actualBoundingBoxAscent, actualBoundingBoxDescent
    } = metrics;
    const fontHeight = fontBoundingBoxAscent + fontBoundingBoxDescent;
    if (!fontHeight || !width || actualBoundingBoxAscent + actualBoundingBoxDescent <= 0) return bounds;

    const scaleY = bounds.height / fontHeight;
    const spacing = Number.parseFloat(style.letterSpacing) || 0;
    const scaleX = clamp(bounds.width / Math.max(width + spacing, 1), 0.65, 1.5);
    const baseline = bounds.top + fontBoundingBoxAscent * scaleY;
    return {
      left: bounds.left - actualBoundingBoxLeft * scaleX,
      right: bounds.left + actualBoundingBoxRight * scaleX,
      top: baseline - actualBoundingBoxAscent * scaleY,
      bottom: baseline + actualBoundingBoxDescent * scaleY
    };
  }

  function textPieces(text, individual) {
    if (individual && graphemes) return graphemes.segment(text);
    return Array.from(text.matchAll(individual ? /\S/gu : /\S+/gu), match => ({
      segment: match[0],
      index: match.index
    }));
  }

  function addText(element, origin, individual = false) {
    if (!element || !visible(element)) return;

    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    for (let textNode = walker.nextNode(); textNode; textNode = walker.nextNode()) {
      const host = textNode.parentElement;
      if (!/\S/u.test(textNode.data) || !visible(host)) continue;

      const style = getComputedStyle(host);
      const firstLine = element === title && host.closest('.wall-title-first');
      const gold = element === title && host.closest('strong');
      const finalPerch = element === kicker && host.closest('.plush-final-perch');
      for (const { segment, index } of textPieces(textNode.data, individual)) {
        if (!/\S/u.test(segment)) continue;
        range.setStart(textNode, index);
        range.setEnd(textNode, index + segment.length);
        const bounds = range.getBoundingClientRect();
        const box = addCollider(inkRect(segment, bounds, style), origin);
        if (box && element === title) headlineBoxes.push(box);
        if (box && element === kicker) kickerBoxes.push(box);
        if (box && finalPerch) finalPerches.push(box);
        if (box && firstLine) titleBoxes.push(box);
        if (box && gold) goldBoxes.push(box);
      }
    }
  }

  function measure(time) {
    const origin = heroOrigin();
    const width = hero.clientWidth;
    const height = hero.clientHeight;
    radius = (ball.offsetWidth || radius / 0.48) * 0.48;
    const edge = radius + 10;
    const bottom = Math.max(edge, height - edge);
    const top = clamp((header?.offsetHeight || 0) + edge, edge, bottom);
    world = { width, height, top, bottom, left: edge, right: Math.max(edge, width - edge), origin };

    colliders = [];
    titleBoxes = [];
    headlineBoxes = [];
    goldBoxes = [];
    kickerBoxes = [];
    finalPerches = [];
    controlTop = Infinity;
    addText(kicker, origin, true);
    if (!ruined) {
      addText(title, origin, true);
      for (const element of copy) addText(element, origin);
    }
    standingBoxes = [...kickerBoxes];
    for (const control of controls) {
      if (!visible(control)) continue;
      const box = addCollider(control.getBoundingClientRect(), origin, 6);
      if (box) {
        controlTop = Math.min(controlTop, box.top);
        standingBoxes.push(box);
      }
    }
    sceneDirty = false;
    lastMeasure = time;
  }

  function contactAt(box, cx, cy) {
    if (cx + radius <= box.left || cx - radius >= box.right
      || cy + radius <= box.top || cy - radius >= box.bottom) return null;

    const dx = cx - clamp(cx, box.left, box.right);
    const dy = cy - clamp(cy, box.top, box.bottom);
    const distance = Math.hypot(dx, dy);
    if (distance >= radius) return null;
    if (distance > 0.001) return { nx: dx / distance, ny: dy / distance, depth: radius - distance };

    const left = cx - box.left;
    const right = box.right - cx;
    const top = cy - box.top;
    const bottom = box.bottom - cy;
    const nearest = Math.min(left, right, top, bottom);
    if (nearest === top) return { nx: 0, ny: -1, depth: radius + top };
    if (nearest === bottom) return { nx: 0, ny: 1, depth: radius + bottom };
    if (nearest === left) return { nx: -1, ny: 0, depth: radius + left };
    return { nx: 1, ny: 0, depth: radius + right };
  }

  function solidBoxes() {
    if (riotActive) return kickerBoxes;
    return ruined ? standingBoxes : colliders;
  }

  function hasSupport() {
    return y >= world.bottom - 0.65
      || solidBoxes().some(box => contactAt(box, x, y + 0.65)?.ny < -0.48);
  }

  function park(initial = false) {
    const inset = Math.min(18, world.width * 0.035);
    const right = Math.max(world.left, world.right - inset);
    const visibleBottom = window.innerHeight - world.origin.top - radius - 12;
    // The paired mobile buttons leave too little side clearance to circle them from below.
    const entryFloor = world.width <= 768 && !ruined ? controlTop - radius - 0.1 : world.bottom;
    const bottom = initial
      ? clamp(Math.min(visibleBottom, entryFloor), world.top, world.bottom)
      : world.bottom;
    const step = radius * 1.45;
    for (let py = bottom; py >= world.top; py -= step) {
      for (let px = right; px >= world.left; px -= step) {
        if (solidBoxes().some(box => contactAt(box, px, py))) continue;
        x = px;
        y = py;
        grounded = hasSupport();
        return;
      }
    }
    x = right;
    y = bottom;
    grounded = hasSupport();
  }

  function perchPoint(glyph, solids = solidBoxes()) {
    const px = (glyph.left + glyph.right) / 2;
    if (px < world.left || px > world.right) return null;

    for (let clearance = 0.1; clearance <= 6; clearance += 0.5) {
      const py = glyph.top - radius - clearance;
      if (py < world.top || py > world.bottom || solids.some(box => contactAt(box, px, py))) continue;
      if (solids.some(box => contactAt(box, px, py + 0.65)?.ny < -0.48)) return { x: px, y: py };
    }
    return null;
  }

  function perchOnTitle(requireVisible = true, ledges = titleBoxes) {
    const point = [...ledges].sort((first, second) => second.right - first.right)
      .map(glyph => perchPoint(glyph)).find(point => point && (!requireVisible || inSight(point.y)));
    if (!point) return false;

    ({ x, y } = point);
    grounded = true;
    return true;
  }

  function adoptInitialPosition() {
    const bounds = ball.getBoundingClientRect();
    const cx = mountCenter?.x ?? bounds.left + bounds.width * 0.5 - world.origin.left;
    let cy = mountCenter?.y ?? bounds.top + bounds.height * 0.5 - world.origin.top;
    if (mountCenter) {
      // Match the preboot mount's horizontal position to the ink's physical support.
      const ledges = (signatureStart ? kickerBoxes : titleBoxes).flatMap(box => {
        const distance = Math.abs(cx - clamp(cx, box.left, box.right));
        if (distance >= radius) return [];
        const top = box.top - Math.sqrt(radius * radius - distance * distance) - 0.08;
        return Math.abs(top - cy) <= radius * 0.5 ? [top] : [];
      }).sort((first, second) => Math.abs(first - cy) - Math.abs(second - cy));
      cy = ledges.find(top => !solidBoxes().some(box => contactAt(box, cx, top))) ?? cy;
    }
    const aboveActions = world.width > 768 || cy <= controlTop - radius;
    if (!aboveActions || !inSight(cy) || cx < world.left || cx > world.right
      || cy < world.top || cy > world.bottom || solidBoxes().some(box => contactAt(box, cx, cy))) return false;

    x = cx;
    y = cy;
    grounded = hasSupport();
    return grounded;
  }

  function touchSurface(nx, ny, bounce) {
    if (ny < -0.48) grounded = true;
    if (!bounce) return;

    const speed = vx * nx + vy * ny;
    if (speed >= 0) return;

    const hit = -speed;
    const perchLanding = intent === 'perch-hop' && ny < -0.48 && vy > 0;
    const restitution = !perchLanding && hit > 88 ? 0.43 : 0;
    vx -= speed * (1 + restitution) * nx;
    vy -= speed * (1 + restitution) * ny;
    if (perchLanding) vx *= 0.08;

    if (hit > impact && hit > 95) {
      const strength = clamp((hit - 75) / 1400, 0, 1);
      squashX = Math.abs(nx);
      squashY = Math.abs(ny);
      squash = Math.max(squash, 0.06 + strength * 0.22);
      squashSpeed = Math.max(squashSpeed, 0.45 + strength * 1.75);
    }
    if (hit > 20) impact = Math.max(impact, hit);
  }

  function solve(bounce, solids = solidBoxes(), bounds = world) {
    grounded = false;
    for (let count = 0; count < 5; count += 1) {
      if (x < bounds.left) { x = bounds.left; touchSurface(1, 0, bounce); }
      if (x > bounds.right) { x = bounds.right; touchSurface(-1, 0, bounce); }
      if (y < bounds.top) { y = bounds.top; touchSurface(0, 1, bounce); }
      if (y >= bounds.bottom) { y = bounds.bottom; touchSurface(0, -1, bounce); }

      let contact = null;
      for (const box of solids) {
        const next = contactAt(box, x, y);
        if (next && (!contact || next.depth > contact.depth)) contact = next;
      }
      if (!contact) break;

      const { nx, ny, depth } = contact;
      x += nx * (depth + 0.04);
      y += ny * (depth + 0.04);
      touchSurface(nx, ny, bounce);
    }
    x = clamp(x, bounds.left, bounds.right);
    y = clamp(y, bounds.top, bounds.bottom);
  }

  function clearOverlap() {
    solve(false);
    if (solidBoxes().some(box => (contactAt(box, x, y)?.depth || 0) > 1.5)) park();
    grounded ||= hasSupport();
  }

  // Walk a move in short steps so fast pointer input and a sprint both respect obstacles.
  function sweepTo(nextX, nextY, solids = solidBoxes(), bounds = world, afterStep) {
    const distance = Math.hypot(nextX - x, nextY - y);
    const steps = Math.max(1, Math.ceil(distance / (radius * 0.34)));
    const stepX = (nextX - x) / steps;
    const stepY = (nextY - y) / steps;
    for (let index = 0; index < steps; index += 1) {
      const previousX = x;
      const previousY = y;
      x += stepX;
      y += stepY;
      solve(false, solids, bounds);
      afterStep?.(x - previousX, y - previousY);
      if (Math.hypot(x - previousX, y - previousY) < 0.06) break;
    }
  }

  function stopMotion() {
    vx = 0;
    vy = 0;
    squash = 0;
    squashSpeed = 0;
    moving = false;
    stillTime = 0;
    ball.removeAttribute('data-active');
  }

  function integrate(delta) {
    const steps = Math.max(1, Math.ceil(delta * 140));
    const step = delta / steps;
    for (let count = 0; count < steps; count += 1) {
      vy = Math.min(vy + gravity * step, maxSpeed);
      x += vx * step;
      y += vy * step;
      solve(true);
      vx *= Math.exp(-(grounded ? 4.6 : 0.44) * step);
      angle += (vx / radius) * (180 / Math.PI) * (grounded ? 1 : 0.58) * step;
      squashSpeed += (-165 * squash - 14.5 * squashSpeed) * step;
      squash += squashSpeed * step;
    }

    const slow = Math.abs(vx) < 19 && Math.abs(vy) < 19;
    if (slow) grounded ||= hasSupport();
    stillTime = grounded && slow ? stillTime + delta : 0;
    if (stillTime > 0.27) {
      stopMotion();
      clearOverlap();
      if (intent === 'perch-hop') clearPerch();
      const landed = pendingThrow;
      if (landed) {
        pendingThrow = null;
        return landed;
      }
    }
  }

  function clearPerch(cancelFlight = true) {
    window.clearTimeout(perchTimer);
    window.clearTimeout(glanceTimer);
    perchTimer = 0;
    glanceTimer = 0;
    if (intent !== 'perch-look' && !(cancelFlight && intent === 'perch-hop')) return false;
    intent = null;
    target = null;
    return true;
  }

  function canAutoplay() {
    return placed && !paused && grounded && !moving && !drag && !hovered && !riotActive
      && !motionPreference.matches && !ball.matches(':focus-visible');
  }

  function inSight(py = y) {
    const origin = heroOrigin();
    const headerHeight = header?.offsetHeight || 0;
    return origin.top + py - radius > headerHeight
      && origin.top + py + radius < window.innerHeight;
  }

  function hopTrajectory(point) {
    const dx = point.x - x;
    const dy = point.y - y;
    const duration = clamp(0.43 + Math.abs(dx) / 950, 0.46, 0.57);
    const startVx = dx * 0.44 / (1 - Math.exp(-0.44 * duration));
    const startVy = dy / duration - gravity * duration * 0.5;
    if (startVy >= -100) return null;

    for (let step = 1; step < 25; step += 1) {
      const time = duration * step / 25;
      const px = x + startVx * (1 - Math.exp(-0.44 * time)) / 0.44;
      const py = y + startVy * time + gravity * time * time * 0.5;
      if (py < world.top || py > world.bottom || px < world.left || px > world.right
        || solidBoxes().some(box => contactAt(box, px, py))) return null;
    }
    return { vx: startVx, vy: startVy };
  }

  function launchPerch(point, trajectory) {
    intent = 'perch-hop';
    target = point;
    used = true;
    ({ vx, vy } = trajectory);
    squash = 0.13;
    squashSpeed = -1.4;
    squashX = 0;
    squashY = 1;
    grounded = false;
    startMotion();
    paint();
  }

  function tryEntrancePerch() {
    if (used || !placed || paused || moving || drag || motionPreference.matches || world.width < 960) return;
    measure(performance.now());
    if (titleBoxes.some(box => contactAt(box, x, y + 0.65)?.ny < -0.48)) return;

    const points = titleBoxes.map(glyph => perchPoint(glyph)).filter(Boolean)
      .sort((first, second) => Math.hypot(first.x - x, first.y - y) - Math.hypot(second.x - x, second.y - y));
    for (const point of points) {
      if (Math.abs(point.x - x) > radius * 4.5 || !inSight(point.y)) continue;
      const trajectory = hopTrajectory(point);
      if (!trajectory) continue;
      clearPerch();
      launchPerch(point, trajectory);
      return;
    }
  }

  function armPerch() {
    if (perchTimer || intent || !canAutoplay()) return;
    const ledges = ruined ? kickerBoxes : [...headlineBoxes, ...kickerBoxes];
    if (!ledges.some(box => contactAt(box, x, y + 0.65)?.ny < -0.48)) return;

    perchTimer = window.setTimeout(() => {
      perchTimer = 0;
      if (!canAutoplay() || !inSight()) {
        armPerch();
        return;
      }
      const neighbors = ledges.map(glyph => perchPoint(glyph)).filter(point => {
        if (!point) return false;
        const dx = Math.abs(point.x - x);
        return dx >= radius * 0.62 && dx <= radius * 4.2
          && Math.abs(point.y - y) < radius * 1.55 && hopTrajectory(point);
      }).sort((first, second) => Math.abs(first.x - x) - Math.abs(second.x - x)).slice(0, 2);
      if (!neighbors.length) {
        armPerch();
        return;
      }

      intent = 'perch-look';
      target = neighbors[Math.floor(Math.random() * neighbors.length)];
      paint();
      glanceTimer = window.setTimeout(() => {
        glanceTimer = 0;
        if (sceneDirty) measure(performance.now());
        const trajectory = canAutoplay() && inSight() && hopTrajectory(target);
        if (!trajectory) {
          clearPerch();
          paint();
          return;
        }
        launchPerch(target, trajectory);
      }, 450);
    }, 26000 + Math.random() * 18000);
  }

  function readRiotTargets(targets, hit = new Set()) {
    const width = hero.clientWidth;
    const height = hero.clientHeight;
    return new Map((Array.isArray(targets) ? targets : [])
      .filter(box => box && box.id != null && !hit.has(box.id)
        && [box.left, box.right, box.top, box.bottom].every(Number.isFinite)
        && box.right > Math.max(box.left, 0) && box.left < width
        && box.bottom > Math.max(box.top, 0) && box.top < height)
      .map(box => [box.id, box]));
  }

  function targetPoint(box, bounds = world) {
    return {
      x: clamp((box.left + box.right) * 0.5, bounds.left, bounds.right),
      y: clamp((box.top + box.bottom) * 0.5, bounds.top, bounds.bottom)
    };
  }

  function buildSweeps() {
    const rows = [];
    const points = [...riot.targets.values()].map(box => targetPoint(box)).sort((a, b) => a.y - b.y);
    for (const point of points) {
      const row = rows.at(-1);
      if (row && point.y - row.y <= radius * 0.48) {
        row.left = Math.min(row.left, point.x);
        row.right = Math.max(row.right, point.x);
      } else {
        rows.push({ y: point.y, left: point.x, right: point.x });
      }
    }
    if (!rows.length) return [];
    if (Math.abs(y - rows[0].y) > Math.abs(y - rows.at(-1).y)) rows.reverse();

    let fromLeft = Math.abs(x - rows[0].left) < Math.abs(x - rows[0].right);
    const sweeps = rows.flatMap(row => {
      const start = { x: fromLeft ? row.left : row.right, y: row.y };
      const end = { x: fromLeft ? row.right : row.left, y: row.y };
      fromLeft = !fromLeft;
      return [{ point: start, lift: 5 }, { point: end, lift: 8 }];
    });
    const corridor = kickerCorridor();
    if (!corridor || y > corridor.middle || sweeps[0].point.y <= corridor.middle) return sweeps;

    const { side, below } = corridor;
    const above = Math.min(y, corridor.above);
    const exit = [];
    if (y > above + 1) exit.push({ point: { x, y: above }, lift: 4, duration: 0.17 });
    exit.push(
      { point: { x: side.x, y: above }, lift: 6 },
      { point: { x: side.x, y: below }, lift: 0, duration: 0.27, grip: side.blocked }
    );
    return [...exit, ...sweeps];
  }

  function smashContacts(horizontal, vertical) {
    const current = riot;
    if (!current) return;
    const targets = current.targets;
    for (const [id, box] of targets) {
      if (!contactAt(box, x, y)) continue;

      targets.delete(id);
      current.hit.add(id);
      ball.dispatchEvent(new CustomEvent('plush:smash', {
        detail: { id, x, y, vx: horizontal, vy: vertical }
      }));
      if (riot !== current || current.targets !== targets || paused) return;
    }
  }

  function nextRemainingTarget() {
    let closest = null;
    let bestDistance = Infinity;
    const edgeBounds = { left: 0, top: 0, right: world.width, bottom: world.height };
    for (const box of riot.targets.values()) {
      let bounds = world;
      let point = targetPoint(box);
      if (!contactAt(box, point.x, point.y)) {
        bounds = edgeBounds;
        point = targetPoint(box, bounds);
      }
      const distance = Math.hypot(point.x - x, point.y - y);
      if (distance >= bestDistance) continue;
      closest = { point, lift: 0, grip: true, bounds };
      bestDistance = distance;
    }
    return closest;
  }

  function kickerCorridor() {
    if (!kickerBoxes.length) return null;
    const left = Math.min(...kickerBoxes.map(box => box.left));
    const right = Math.max(...kickerBoxes.map(box => box.right));
    const top = Math.min(...kickerBoxes.map(box => box.top));
    const bottom = Math.max(...kickerBoxes.map(box => box.bottom));
    const sides = [
      clamp(left - radius - 9, world.left, world.right),
      clamp(right + radius + 9, world.left, world.right)
    ].map(sideX => ({
      x: sideX,
      blocked: kickerBoxes.some(box => sideX + radius > box.left && sideX - radius < box.right)
    })).sort((first, second) => Number(first.blocked) - Number(second.blocked)
      || Math.abs(first.x - x) - Math.abs(second.x - x));
    return {
      side: sides[0],
      middle: (top + bottom) / 2,
      above: Math.max(world.top, top - radius - 7),
      below: Math.min(world.bottom, bottom + radius + 7)
    };
  }

  function kickerClimb() {
    const corridor = kickerCorridor();
    if (!corridor) return [];
    const choices = finalPerches.map(glyph => perchPoint(glyph, kickerBoxes)).filter(Boolean);
    const perches = choices.length ? choices : kickerBoxes.map(glyph => perchPoint(glyph, kickerBoxes)).filter(Boolean);
    if (!perches.length) return [];

    const { side, above, below } = corridor;
    const landing = perches.sort((first, second) => Math.abs(first.x - side.x) - Math.abs(second.x - side.x))[0];
    const base = Math.max(below, y);
    return [
      { point: { x: side.x, y: base }, lift: Math.min(8, base - below), duration: 0.28 },
      { point: { x: side.x, y: (base + above) * 0.5 }, lift: 11, duration: 0.23, grip: side.blocked },
      { point: { x: side.x, y: above }, lift: 11, duration: 0.29, grip: side.blocked },
      { point: { x: landing.x, y: above }, lift: 6, duration: 0.28 },
      { point: landing, lift: 0, duration: 0.16 }
    ];
  }

  function startRiot(targets) {
    if (riotActive || ruined || !placed) return;

    const boxes = readRiotTargets(targets);
    if (!boxes.size) return;
    releaseDrag();
    pendingThrow = null;
    clearPerch();
    stopMotion();
    used = true;
    riotActive = true;
    riot = { targets: boxes, hit: new Set(), queue: null, leg: null, climbing: false, done: false };
    intent = 'riot';
    syncVisibility();
    moving = true;
    ball.setAttribute('data-active', '');
    if (!paused) paint();
    wake();
  }

  function refreshRiotLayout(targets) {
    if (!riotActive || riot.done) return;

    riot.targets = readRiotTargets(targets, riot.hit);
    riot.queue = null;
    riot.leg = null;
    riot.climbing = false;
    markSceneDirty();
  }

  function advanceRiot() {
    if (!riot.targets.size && !riot.climbing) {
      riot.climbing = true;
      riot.queue = kickerClimb();
    }
    riot.queue ??= buildSweeps();

    const step = riot.queue.shift() || nextRemainingTarget();
    if (!step) {
      riot.done = true;
      target = null;
      stopMotion();
      clearOverlap();
      paint();
      ball.dispatchEvent(new CustomEvent('plush:riot-done', { detail: { perched: grounded } }));
      return;
    }

    const { point, lift, grip, bounds } = step;
    const distance = Math.hypot(point.x - x, point.y - y);
    const runSpeed = clamp(world.width * 1.34, 750, 1750);
    riot.leg = {
      from: { x, y }, to: point, lift, grip, bounds, elapsed: 0,
      duration: step.duration || clamp(distance / runSpeed, 0.075, 0.92)
    };
    target = point;
  }

  function runRiot(delta) {
    if (!riot) return;
    if (!riot.targets.size && !riot.climbing) riot.leg = null;
    if (!riot.leg) advanceRiot();
    if (!riot?.leg) return;

    const leg = riot.leg;
    leg.elapsed += delta;
    const progress = Math.min(leg.elapsed / leg.duration, 1);
    const ease = progress * progress * (3 - 2 * progress);
    const stride = Math.sin(progress * Math.PI * (leg.duration > 0.32 && !riot.climbing ? 2 : 1));
    const nextX = leg.from.x + (leg.to.x - leg.from.x) * ease;
    const lift = stride * stride;
    const nextY = leg.from.y + (leg.to.y - leg.from.y) * ease - lift * leg.lift;
    const previousX = x;
    const previousY = y;
    const dt = Math.max(delta, 0.008);
    const horizontal = (nextX - x) / dt;
    const vertical = (nextY - y) / dt;
    sweepTo(nextX, nextY, leg.grip ? [] : kickerBoxes, leg.bounds || world, () => {
      smashContacts(horizontal, vertical);
    });
    vx = (x - previousX) / dt;
    vy = (y - previousY) / dt;
    angle += (x - previousX) * 57.3 / radius;
    squash = 0.02 + lift * (leg.grip ? 0.15 : 0.12);
    squashX = leg.grip ? 1 : 0;
    squashY = leg.grip ? 0 : 1;
    if (progress === 1 && riot?.leg === leg) riot.leg = null;
  }

  function stopRiot(destroyed) {
    if (!riotActive && (!destroyed || ruined)) return;

    ruined ||= destroyed;
    riotActive = false;
    riot = null;
    intent = null;
    target = null;
    stopMotion();
    sceneDirty = true;
    if (paused) {
      poseDirty = true;
      return;
    }
    measure(performance.now());
    clearOverlap();
    if (!grounded && !destroyed) startMotion();
    paint();
  }

  function nearestGold() {
    if (ruined || riotActive) return null;

    let gold = null;
    for (const box of goldBoxes) {
      const pointX = clamp(x, box.left, box.right);
      const pointY = clamp(y, box.top, box.bottom);
      const distance = Math.hypot(pointX - x, pointY - y);
      if (!gold || distance < gold.distance) gold = { x: pointX, y: pointY, distance };
    }
    return gold;
  }

  function paint() {
    const rotation = angle % 360;
    const style = ball.style;
    style.transform = `translate3d(${x.toFixed(2)}px,${y.toFixed(2)}px,0) translate(-50%,-50%)`;
    style.setProperty('--plush-angle', `${rotation.toFixed(2)}deg`);
    style.setProperty('--plush-sx', (1 + squash * (0.64 * squashY - squashX)).toFixed(3));
    style.setProperty('--plush-sy', (1 + squash * (0.64 * squashX - squashY)).toFixed(3));
    style.setProperty('--plush-shadow', grounded ? '0.64' : '0.25');

    ball.dispatchEvent(new CustomEvent('plush:pose', {
      detail: {
        x, y, vx, vy, angle: rotation, squash, grounded, dragging: Boolean(drag),
        moving, gold: nearestGold(), impact, intent, target
      }
    }));
    impact = 0;
    poseDirty = false;
    armPerch();
  }

  function stopFrames() {
    if (frame) {
      if (ticker) ticker.remove(stepFrame);
      else cancelAnimationFrame(frame);
    }
    frame = 0;
    lastFrame = 0;
  }

  function wake() {
    if (frame || paused || !placed) return;

    if (ticker) {
      frame = 1;
      ticker.add(stepFrame);
    } else {
      frame = requestAnimationFrame(stepFrame);
    }
  }

  function markSceneDirty() {
    sceneDirty = true;
    wake();
  }

  function stepFrame() {
    const time = performance.now();
    const delta = lastFrame ? clamp((time - lastFrame) / 1000, 0, 0.033) : 1 / 60;
    lastFrame = time;

    if (sceneDirty || ((moving || drag) && titleEntering && time - lastMeasure >= 85)) {
      measure(time);
      if (!riotActive) clearOverlap();
    }
    let landed;
    if (moving && !drag) {
      if (riot) runRiot(delta);
      else landed = integrate(delta);
    }
    paint();
    if (landed) {
      if (landed.kind === 'throw') ball.dispatchEvent(new CustomEvent('plush:throw-landed', { detail: landed }));
      ball.dispatchEvent(new CustomEvent('plush:landed', { detail: landed }));
    }

    if (!moving && !sceneDirty && !poseDirty) stopFrames();
    else if (!ticker) frame = requestAnimationFrame(stepFrame);
  }

  function startMotion() {
    if (motionPreference.matches) return;
    moving = true;
    stillTime = 0;
    ball.setAttribute('data-active', '');
    wake();
  }

  function releaseDrag() {
    if (!drag) return null;

    const result = drag;
    drag = null;
    ball.removeAttribute('data-dragging');
    if (ball.hasPointerCapture(result.id)) ball.releasePointerCapture(result.id);
    return result;
  }

  function syncVisibility() {
    const covered = menu?.classList.contains('open') || document.fullscreenElement || document.webkitFullscreenElement;
    paused = !inView || document.hidden || Boolean(covered) || (riotActive && motionPreference.matches);
    ball.toggleAttribute('data-offstage', paused);
    if (paused) {
      if (clearPerch()) poseDirty = true;
      if (releaseDrag()) {
        stopMotion();
        poseDirty = true;
      }
      stopFrames();
    }

    ball.hidden = Boolean(covered);
    if (paused) return;
    if (!placed) {
      measure(performance.now());
      const mounted = mountCenter && adoptInitialPosition();
      const perched = !mounted && (signatureStart
        ? perchOnTitle(true, finalPerches) : perchOnTitle());
      if (!mounted && !perched && !adoptInitialPosition()) park(true);
      placed = true;
      paint();
    } else if (moving || sceneDirty || poseDirty) {
      wake();
    } else {
      armPerch();
    }
  }

  function sampleDrag(time) {
    drag.samples.push({ x, y, time });
    while (drag.samples.length > 2 && drag.samples[0].time < time - 110) drag.samples.shift();
  }

  function beginDrag(event) {
    if (event.button !== 0 || !event.isPrimary || drag || paused || riotActive) return;

    pendingThrow = null;
    clearPerch();
    used = true;
    stopMotion();
    const origin = heroOrigin();
    drag = {
      id: event.pointerId,
      clientX: event.clientX,
      clientY: event.clientY,
      targetX: x,
      targetY: y,
      offsetX: x - (event.clientX - origin.left),
      offsetY: y - (event.clientY - origin.top),
      moved: false,
      samples: [],
      time: performance.now()
    };
    sampleDrag(drag.time);
    ball.setAttribute('data-dragging', '');
    try {
      ball.setPointerCapture(event.pointerId);
    } catch {
      // Window listeners also cover browsers that reject pointer capture.
    }
    paint();
  }

  function moveDrag(event) {
    if (event.pointerId !== drag?.id || paused) return;
    if (Math.hypot(event.clientX - drag.clientX, event.clientY - drag.clientY) > 4) drag.moved = true;
    if (!drag.moved) return;

    const time = performance.now();
    if (sceneDirty || (titleEntering && time - lastMeasure >= 85)) measure(time);
    const origin = heroOrigin();
    const previousX = x;
    const previousY = y;
    const targetX = clamp(event.clientX - origin.left + drag.offsetX, -radius, world.width + radius);
    const targetY = clamp(event.clientY - origin.top + drag.offsetY, -radius, world.height + radius);
    const elapsed = Math.max((time - drag.time) / 1000, 0.008);
    sweepTo(targetX, targetY);

    vx = clamp((x - previousX) / elapsed, -maxSpeed, maxSpeed);
    vy = clamp((y - previousY) / elapsed, -maxSpeed, maxSpeed);
    if (!motionPreference.matches) {
      const pressX = targetX - x;
      const pressY = targetY - y;
      const pressure = Math.hypot(pressX, pressY);
      const increasedPress = (targetX - drag.targetX) * pressX + (targetY - drag.targetY) * pressY;
      const hit = increasedPress / (elapsed * (pressure || 1));
      if (pressure > 4 && hit > 20) impact = Math.min(hit, maxSpeed);
      squash = Math.min(pressure / (radius * 5.2), 0.21);
      squashX = Math.abs(pressX) / (pressure || 1);
      squashY = Math.abs(pressY) / (pressure || 1);
      angle += (x - previousX) * 0.36;
    }

    drag.targetX = targetX;
    drag.targetY = targetY;
    drag.time = time;
    sampleDrag(time);
    paint();
  }

  function tap() {
    if (paused || riotActive) return;

    pendingThrow = null;
    clearPerch();
    used = true;
    if (sceneDirty) measure(performance.now());
    const direction = x > world.width / 2 ? -1 : 1;
    if (motionPreference.matches) {
      ball.dispatchEvent(new CustomEvent('plush:landed', { detail: { kind: 'tap' } }));
      return;
    }

    pendingThrow = { kind: 'tap' };
    vx = direction * 112;
    vy = -315;
    grounded = false;
    squash = 0.09;
    squashSpeed = -1.1;
    squashX = 0;
    squashY = 1;
    startMotion();
    paint();
  }

  function finishDrag(event) {
    if (event.pointerId !== drag?.id) return;

    if (event.type === 'pointerup') moveDrag(event);
    const { samples, moved } = releaseDrag();
    if (paused) return;
    if (!moved && event.type === 'pointerup') {
      tap();
      return;
    }

    if (sceneDirty) measure(performance.now());
    clearOverlap();
    if (motionPreference.matches || event.type !== 'pointerup') {
      stopMotion();
      paint();
      return;
    }

    const last = samples[samples.length - 1];
    const first = samples.find(sample => sample.time >= last.time - 115) || last;
    const elapsed = Math.max(last.time - first.time, 16) / 1000;
    vx = (last.x - first.x) / elapsed;
    vy = (last.y - first.y) / elapsed;
    const factor = Math.min(1, maxSpeed / (Math.hypot(vx, vy) || 1));
    vx *= factor;
    vy *= factor;
    const speed = Math.hypot(vx, vy);
    const traveled = Math.hypot(last.x - first.x, last.y - first.y);
    if (speed >= 120 && traveled >= Math.max(9, radius * 0.34)) {
      pendingThrow = { id: ++throwId, speed, kind: 'throw' };
      if (!ruined) ball.dispatchEvent(new CustomEvent('plush:throw', { detail: pendingThrow }));
    }
    startMotion();
    paint();
  }

  ball.addEventListener('pointerdown', beginDrag);
  window.addEventListener('pointermove', moveDrag, { passive: true });
  window.addEventListener('pointerup', finishDrag, { passive: true });
  window.addEventListener('pointercancel', finishDrag, { passive: true });
  ball.addEventListener('lostpointercapture', finishDrag);
  ball.addEventListener('pointerenter', event => {
    if (event.pointerType === 'touch') return;
    hovered = true;
    if (clearPerch(false) && !paused) paint();
  });
  ball.addEventListener('pointerleave', () => {
    hovered = false;
    armPerch();
  });
  ball.addEventListener('focus', () => {
    if (ball.matches(':focus-visible') && clearPerch(false) && !paused) paint();
  });
  ball.addEventListener('blur', armPerch);
  ball.addEventListener('click', event => {
    if (event.detail === 0) tap();
  });
  ball.addEventListener('plush:riot', ({ detail }) => {
    if (detail?.active) startRiot(detail.targets);
    else stopRiot(Boolean(detail?.destroyed));
  });
  ball.addEventListener('plush:riot-layout', ({ detail }) => refreshRiotLayout(detail?.targets));
  window.addEventListener('blur', () => {
    if (!releaseDrag()) return;
    stopMotion();
    clearOverlap();
    paint();
  });

  // Scrolling only changes the hero's screen position. It never advances the local simulation.
  function updateVisibility(intersects) {
    if (inView === intersects) return;
    inView = intersects;
    syncVisibility();
  }

  if ('IntersectionObserver' in window) {
    const headerHeight = header?.offsetHeight || 0;
    new IntersectionObserver(([entry]) => {
      updateVisibility(entry.isIntersecting);
    }, { rootMargin: `-${headerHeight}px 0px 0px` }).observe(hero);
  } else {
    const checkVisibility = () => {
      const rect = hero.getBoundingClientRect();
      updateVisibility(rect.bottom > 0 && rect.top < window.innerHeight);
    };
    window.addEventListener('scroll', checkVisibility, { passive: true });
  }

  if (menu) new MutationObserver(syncVisibility).observe(menu, { attributes: true, attributeFilter: ['class'] });
  document.addEventListener('visibilitychange', syncVisibility);
  document.addEventListener('fullscreenchange', syncVisibility);
  document.addEventListener('webkitfullscreenchange', syncVisibility);
  motionPreference.addEventListener('change', () => {
    if (riotActive) {
      syncVisibility();
      return;
    }
    releaseDrag();
    pendingThrow = null;
    clearPerch();
    stopMotion();
    poseDirty = true;
    syncVisibility();
  });

  if ('ResizeObserver' in window) {
    const resize = new ResizeObserver(markSceneDirty);
    [hero, title, header, hero.querySelector('.wall-copy')].filter(Boolean).forEach(element => resize.observe(element));
  } else {
    window.addEventListener('resize', markSceneDirty, { passive: true });
  }
  const onFonts = () => {
    inkCache.clear();
    markSceneDirty();
  };
  document.fonts?.addEventListener('loadingdone', onFonts);
  document.fonts?.ready.then(onFonts);

  const titleAnimations = title?.getAnimations?.({ subtree: true })
    .filter(animation => animation.playState !== 'finished' && animation.animationName?.startsWith('wall-title-in-')) || [];
  titleEntering = titleAnimations.length > 0;
  const heroBounds = hero.getBoundingClientRect();
  inView = heroBounds.bottom > (header?.offsetHeight || 0) && heroBounds.top < window.innerHeight;
  syncVisibility();

  if (titleAnimations.length) {
    const finishEntrance = () => {
      if (!titleEntering) return;

      titleEntering = false;
      tryEntrancePerch();
      markSceneDirty();
    };
    const timeout = window.setTimeout(finishEntrance, 1800);
    Promise.allSettled(titleAnimations.map(animation => animation.finished)).then(() => {
      window.clearTimeout(timeout);
      finishEntrance();
    });
  }
})();
