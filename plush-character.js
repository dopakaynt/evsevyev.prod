(() => {
  'use strict';

  const ball = document.querySelector('#plush-ball');
  const hero = ball?.closest('#hero');
  if (!hero) return;
  const caption = ball.querySelector('.plush-talk');
  const replies = {
    tap: ['Эй-эй!', 'Я тут вообще-то.', 'Ну чего ты?', 'Можно потише?', 'Дай посидеть.'],
    throw: ['Перестань!', 'Хватит!', 'Остановись!', 'Так, всё!', 'Я тебе не мячик!']
  };

  const radians = Math.PI / 180;
  const degrees = 180 / Math.PI;
  const quiet = window.matchMedia('(prefers-reduced-motion: reduce)');
  const idleCues = [
    { name: 'curious', duration: 990, gaze: [-1, -.35] },
    { name: 'sleepy', duration: 1390, gaze: [.25, 1] },
    { name: 'suspicious', duration: 1080, gaze: [1, -.16] },
    { name: 'smug', duration: 1120, gaze: [-1, .4] }
  ];
  const set = (name, value) => ball.style.setProperty(name, value);
  let pose;
  let pointer;
  let uprightOffset = 0;
  let hitUntil = 0;
  let recoveryUntil = 0;
  let expressionTimer;
  let expressionDeadline;
  let idleTimer;
  let idleCue;
  let idleUntil = 0;
  let idleIndex = 0;
  let speech;
  let lastReply;

  function silence() {
    speech?.cancel();
    speech = null;
    delete ball.dataset.speaking;
  }

  function reply(kind) {
    if (!caption || !pose || ball.hidden || ball.hasAttribute('data-offstage') || ball.dataset.riot) return;
    const choices = replies[kind]?.filter(line => line !== lastReply);
    if (!choices?.length) return;

    silence();
    lastReply = choices[Math.floor(Math.random() * choices.length)];
    caption.textContent = lastReply;
    ball.dataset.speaking = '';
    const margin = caption.offsetWidth / 2 + 10;
    const center = Math.min(hero.clientWidth - margin, Math.max(margin, pose.x));
    const horizontal = `calc(-50% + ${center - pose.x}px)`;
    const placement = offset => `translate3d(${horizontal},${offset}px,0)`;
    const rise = quiet.matches ? 0 : 5;
    speech = caption.animate([
      { opacity: 0, transform: placement(rise), easing: 'cubic-bezier(.16,1,.3,1)' },
      { opacity: 1, transform: placement(0), offset: .18 },
      { opacity: 1, transform: placement(0), offset: .79, easing: 'ease-in-out' },
      { opacity: 0, transform: placement(-rise / 2) }
    ], { duration: 1380, fill: 'both' });
    speech.onfinish = silence;
  }

  function look(dx, dy, range) {
    const angle = (pose.angle + uprightOffset) * radians;
    const norm = Math.max(1, Math.hypot(dx, dy));
    const x = (dx * Math.cos(angle) + dy * Math.sin(angle)) / norm;
    const y = (dy * Math.cos(angle) - dx * Math.sin(angle)) / norm;
    set('--plush-gaze-x', `${(x * range).toFixed(2)}px`);
    set('--plush-gaze-y', `${(y * range * .72).toFixed(2)}px`);
  }

  function updateEyes() {
    if (!pose) return;
    const mood = ball.dataset.mood;
    if (idleCue && mood === idleCue.name) {
      look(...idleCue.gaze, 2.9);
    } else if (pose.target && (mood === 'scout' || mood === 'hop' || mood === 'riot')) {
      look(pose.target.x - pose.x, pose.target.y - pose.y, mood === 'scout' ? 3.2 : 2.6);
    } else if (mood === 'air' || mood === 'riot') {
      look(pose.vx, pose.vy, 2.65);
    } else if (pointer && mood !== 'hit') {
      const dx = pointer.x - pose.x;
      const dy = pointer.y - pose.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 260 || mood === 'grab') {
        look(dx || -1, dy, mood === 'grab' ? 2.8 : 2.35);
      } else {
        look(1, -.14, 1.35);
      }
    } else {
      look(1, -.14, mood === 'recover' ? 2.5 : 1.35);
    }
  }

  function canIdle() {
    return pose && !pose.moving && !pose.dragging && !pose.intent && !ball.dataset.riot
      && !ball.dataset.temper && !ball.hidden && !ball.hasAttribute('data-offstage') && !quiet.matches;
  }

  function queueIdle() {
    if (idleTimer || idleCue || !canIdle()) return;
    const delay = idleIndex === 0 ? 2500 + Math.random() * 1800 : 7800 + Math.random() * 6000;
    idleTimer = window.setTimeout(() => {
      idleTimer = 0;
      if (!canIdle()) return;
      const now = performance.now();
      idleCue = idleCues[idleIndex % idleCues.length];
      idleIndex += 1;
      idleUntil = now + idleCue.duration;
      updateExpression(now);
    }, delay);
  }

  function updateExpression(now) {
    if (!pose) return;
    let mood = 'rest';
    if (pose.dragging) mood = 'grab';
    else if (pose.intent === 'riot') mood = 'riot';
    else if (now < hitUntil) mood = 'hit';
    else if (pose.intent === 'perch-look') mood = 'scout';
    else if (pose.intent === 'perch-hop') mood = 'hop';
    else if (pose.moving && !pose.grounded) mood = 'air';
    else if (now < recoveryUntil) mood = 'recover';

    if (mood !== 'rest' || !canIdle()) {
      clearTimeout(idleTimer);
      idleTimer = 0;
      idleCue = null;
    } else {
      if (idleCue && now >= idleUntil) idleCue = null;
      if (idleCue) mood = idleCue.name;
      else queueIdle();
    }

    if (ball.dataset.mood !== mood) ball.dataset.mood = mood;
    updateEyes();

    const deadline = mood === 'hit' ? hitUntil : mood === 'recover' ? recoveryUntil : idleCue ? idleUntil : 0;
    if (deadline === expressionDeadline) return;
    clearTimeout(expressionTimer);
    expressionDeadline = deadline;
    if (deadline) {
      expressionTimer = setTimeout(() => updateExpression(performance.now()), Math.ceil(deadline - now) + 1);
    }
  }

  function updateLight({ x, y, gold }) {
    if (!gold) {
      set('--plush-gold-power', '0');
      return;
    }

    const falloff = Math.max(0, 1 - gold.distance / 108);
    const direction = Math.atan2(gold.x - x, y - gold.y) * degrees;
    set('--plush-gold-power', (.34 * falloff * falloff).toFixed(3));
    set('--plush-gold-source', `${(direction + 180).toFixed(2)}deg`);
  }

  ball.addEventListener('plush:pose', ({ detail }) => {
    const now = performance.now();
    if (detail.dragging) {
      hitUntil = recoveryUntil = 0;
    } else if (detail.impact > 140) {
      hitUntil = now + (detail.impact > 500 ? 180 : 115);
      recoveryUntil = 0;
    }
    if (pose?.moving && !detail.moving && !detail.dragging) {
      recoveryUntil = Math.max(now, hitUntil) + 385;
      const facing = (detail.angle + uprightOffset) % 360;
      const shortestTurn = ((facing + 540) % 360) - 180;
      uprightOffset -= shortestTurn;
      set('--plush-uprighting', `${uprightOffset.toFixed(2)}deg`);
    }

    pose = detail;
    updateLight(detail);
    updateExpression(now);
  });

  ball.addEventListener('plush:landed', ({ detail }) => reply(detail.kind));
  ball.addEventListener('plush:riot', ({ detail }) => { if (detail.active) silence(); });
  ball.addEventListener('pointerdown', silence);

  hero.addEventListener('pointermove', event => {
    if (ball.hidden) return;
    const bounds = hero.getBoundingClientRect();
    pointer = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
    updateEyes();
  }, { passive: true });
  hero.addEventListener('pointerleave', () => {
    pointer = null;
    updateEyes();
  });

  const refreshExpression = () => {
    if (speech && (ball.hidden || ball.hasAttribute('data-offstage'))) silence();
    updateExpression(performance.now());
  };
  new MutationObserver(refreshExpression).observe(ball, {
    attributeFilter: ['data-offstage', 'data-riot', 'data-temper', 'hidden']
  });
  quiet.addEventListener('change', refreshExpression);
})();
