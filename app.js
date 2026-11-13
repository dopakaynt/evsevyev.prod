// =========================================================
// EVSEVYEV PROD. — Photorealistic Space & Minimalist Engine
// High-Performance Video Facade & Interactive iPhone Player
// =========================================================

// Database of Kinescope case studies (10 categories, 49 real video IDs)
const portfolioData = {
  restaurants: {
    name: 'Рестораны',
    type: 'vertical',
    isNative: true,
    videos: [
      { id: "rest-01", title: "Гастробар & Стейкхаус", src: "assets/videos/restaurants/rest-01.mp4" },
      { id: "rest-03", title: "Коктейльный бар", src: "assets/videos/restaurants/rest-03.mp4" },
      { id: "rest-02", title: "Мясной ресторан", src: "assets/videos/restaurants/rest-02.mp4" },
      { id: "rest-04", title: "Авторская кухня", src: "assets/videos/restaurants/rest-04.mp4" }
    ]
  },
  microphone: {
    name: 'Микрофон',
    type: 'vertical',
    isNative: true,
    videos: [
      { id: "mic-01", title: "Микрофон 01", src: "assets/videos/microphone/mic-01.mp4" },
      { id: "mic-02", title: "Микрофон 02", src: "assets/videos/microphone/mic-02.mp4" },
      { id: "mic-03", title: "Микрофон 03", src: "assets/videos/microphone/mic-03.mp4" },
      { id: "mic-tnt", title: "Микрофон: ТНТ", src: "assets/videos/microphone/mic-tnt.mp4" }
    ]
  },
  experts: {
    name: 'Эксперты',
    type: 'vertical',
    isNative: true,
    videos: [
      { id: "expert-02", title: "Личный бренд", src: "assets/videos/experts/expert-02.mp4" },
      { id: "expert-01", title: "Бизнес-консалтинг", src: "assets/videos/experts/expert-01.mp4" },
      { id: "expert-03", title: "Инвестиции & Финансы", src: "assets/videos/experts/expert-03.mp4" },
      { id: "expert-04", title: "Психология & Коучинг", src: "assets/videos/experts/expert-04.mp4" }
    ]
  },
  auto: {
    name: 'Авто на заказ',
    type: 'vertical',
    isNative: true,
    videos: [
      { id: "auto-01", title: "Премиум кроссовер", src: "assets/videos/auto/auto-01.mp4" },
      { id: "auto-02", title: "Спорткар на заказ", src: "assets/videos/auto/auto-02.mp4" },
      { id: "auto-03", title: "Подбор авто из Кореи", src: "assets/videos/auto/auto-03.mp4" },
      { id: "auto-04", title: "Выдача автомобиля", src: "assets/videos/auto/auto-04.mp4" }
    ]
  },
  houses: {
    name: 'Загородные дома',
    type: 'vertical',
    isNative: true,
    videos: [
      { id: "house-01", title: "Коттеджный поселок", src: "assets/videos/houses/house-01.mp4" },
      { id: "house-02", title: "Строительство фахверк", src: "assets/videos/houses/house-02.mp4" },
      { id: "house-03", title: "Дизайн виллы", src: "assets/videos/houses/house-03.mp4" },
      { id: "house-04", title: "Рум-тур дома", src: "assets/videos/houses/house-04.mp4" }
    ]
  },
  commercial: {
    name: 'Реклама',
    type: 'horizontal',
    isNative: true,
    videos: [
      { id: "reklama-03", title: "Рекламный ролик продукта", src: "assets/videos/reklama/reklama-03.mp4" },
      { id: "reklama-01", title: "Логард — Имиджевый промо-ролик", src: "assets/videos/reklama/reklama-01.mp4" },
      { id: "reklama-02", title: "Корпоративное видео для бизнеса", src: "assets/videos/reklama/reklama-02.mp4" },
      { id: "reklama-04", title: "Промо-контент для бренда", src: "assets/videos/reklama/reklama-04.mp4" }
    ]
  },
  furniture: {
    name: 'Мебель',
    type: 'vertical',
    isNative: true,
    videos: [
      { id: "mebel-01", title: "Дизайнерские кухни", src: "assets/videos/mebel/mebel-01.mp4" },
      { id: "mebel-02", title: "Шоурум мебели", src: "assets/videos/mebel/mebel-02.mp4" },
      { id: "mebel-04", title: "Премиум гардеробные", src: "assets/videos/mebel/mebel-04.mp4" },
      { id: "mebel-03", title: "Мягкая мебель", src: "assets/videos/mebel/mebel-03.mp4" }
    ]
  },
  wildberries: {
    name: 'Wildberries',
    type: 'vertical',
    isNative: true,
    videos: [
      { id: "wb-04", title: "Стайлер-расческа", src: "assets/videos/wildberries/wb-04.mp4" },
      { id: "wb-01", title: "Керамическая кружка", src: "assets/videos/wildberries/wb-01.mp4" },
      { id: "wb-03", title: "Органайзер для дома", src: "assets/videos/wildberries/wb-03.mp4" },
      { id: "wb-02", title: "Алмазная мозаика", src: "assets/videos/wildberries/wb-02.mp4" }
    ]
  },
  community: {
    name: 'Комьюнити',
    type: 'vertical',
    isNative: true,
    videos: [
      { id: "community-01", title: "Бизнес-клуб", src: "assets/videos/community/community-01.mp4" },
      { id: "community-02", title: "Мастермайнд & Форум", src: "assets/videos/community/community-02.mp4" },
      { id: "community-03", title: "Закрытое мероприятие", src: "assets/videos/community/community-03.mp4" },
      { id: "community-04", title: "Нетворкинг вечер", src: "assets/videos/community/community-04.mp4" }
    ]
  },
  events: {
    name: 'Events',
    type: 'vertical',
    isNative: true,
    videos: [
      { id: "event-03", title: "Фестиваль & Шоу", src: "assets/videos/events/event-03.mp4" },
      { id: "event-02", title: "Вечеринка & Презентация", src: "assets/videos/events/event-02.mp4" },
      { id: "event-01", title: "Масштабный ивент", src: "assets/videos/events/event-01.mp4" }
    ]
  },
  barbershops: {
    name: 'Барбершопы',
    type: 'vertical',
    isNative: true,
    videos: [
      { id: "barber-01", title: "Флагманский барбершоп", src: "assets/videos/barbershop/barber-01.mp4" },
      { id: "barber-03", title: "Мастер в кадре", src: "assets/videos/barbershop/barber-03.mp4" },
      { id: "barber-02", title: "Премиум стрижка", src: "assets/videos/barbershop/barber-02.mp4" },
      { id: "barber-04", title: "Атмосфера салона", src: "assets/videos/barbershop/barber-04.mp4" }
    ]
  },
  unboxing: {
    name: 'Распаковки',
    type: 'vertical',
    isNative: true,
    videos: [
      { id: "unbox-04", title: "Эмоции от распаковки", src: "assets/videos/unboxing/unbox-04.mp4" },
      { id: "unbox-01", title: "Распаковка премиум-бренда", src: "assets/videos/unboxing/unbox-01.mp4" },
      { id: "unbox-03", title: "Детали и макросъемка", src: "assets/videos/unboxing/unbox-03.mp4" },
      { id: "unbox-02", title: "Обзор новинки", src: "assets/videos/unboxing/unbox-02.mp4" }
    ]
  }
};

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
  initLenisScroll();
  initRealisticCosmos();
  initHeroMockup();
  initPricingCarousel();
  initDirectorCinema();
  initClientsInteractions();
  initCreativeInteractions();
  initMobileMenu();
  initPortfolioTabs();
  initRolesCompareAnimation();
  initAudienceMap();
  initProcessSnakeFlow();
});

/* =========================================================
   MODULE 1: Lenis Smooth Scroll Engine
   ========================================================= */
let lenisInstance = null;

function initPricingCarousel() {
  const grid = document.querySelector('.pricing-grid');
  if (!grid) return;
  const cards = [...grid.querySelectorAll('.price-card')];
  if (cards.length !== 3) return;

  const mobile = document.createElement('div');
  mobile.className = 'pricing-mobile';
  mobile.innerHTML = `<div class="pricing-switch" role="group" aria-label="Выберите срок тарифа">
    <span class="pricing-switch-indicator" aria-hidden="true"></span>
    <button type="button" aria-pressed="true">1 месяц</button>
    <button type="button" aria-pressed="false">3 месяца</button>
    <button type="button" aria-pressed="false">1 год</button>
  </div><div class="pricing-mobile-content" aria-live="polite" aria-atomic="true">
    <div class="pricing-mobile-price"></div><p class="pricing-mobile-details"></p><p class="pricing-mobile-saving"></p>
    <div class="pricing-mobile-rule" aria-hidden="true"></div>
  </div><a class="btn btn-primary pricing-mobile-cta" target="_blank" rel="noopener"></a>`;
  grid.before(mobile);
  const buttons = [...mobile.querySelectorAll('.pricing-switch button')];
  const price = mobile.querySelector('.pricing-mobile-price');
  const details = mobile.querySelector('.pricing-mobile-details');
  const saving = mobile.querySelector('.pricing-mobile-saving');
  const content = mobile.querySelector('.pricing-mobile-content');
  const cta = mobile.querySelector('.pricing-mobile-cta');
  let current = -1;
  function select(index, animate = true) {
    if (index === current) return;
    current = index;
    const card = cards[index];
    const link = card.querySelector('.price-card-footer a');
    mobile.querySelector('.pricing-switch').style.setProperty('--pricing-index', index);
    buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    price.textContent = card.querySelector('.tier-price').textContent.trim();
    const detail = card.querySelector('.tier-subprice').textContent.trim().replace('за видео', 'за ролик');
    const parts = detail.split('•');
    details.replaceChildren(document.createTextNode((parts[0] || '').trim() + ' · '));
    const unit = document.createElement('strong');
    unit.textContent = (parts[1] || '').trim();
    details.append(unit);
    saving.textContent = ['', 'На 2 000 ₽ дешевле за ролик', 'На 5 000 ₽ дешевле за ролик'][index];
    cta.href = link.href;
    cta.textContent = link.textContent.trim();
    if (animate) {
      content.classList.remove('is-changing');
      void content.offsetWidth;
      content.classList.add('is-changing');
    }
  }
  buttons.forEach((button, i) => {
    button.addEventListener('click', () => select(i));
    button.addEventListener('keydown', event => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      const next = (i + (event.key === 'ArrowRight' ? 1 : -1) + buttons.length) % buttons.length;
      buttons[next].focus();
      select(next);
    });
  });
  select(0, false);
  grid.classList.add('pricing-grid-enhanced');
}

function initLenisScroll() {
  if (typeof Lenis === 'undefined') return;

  lenisInstance = new Lenis({
    duration: 1.0,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.2
  });

  // Single RAF runner: synchronize with GSAP ticker if available, or native RAF
  if (typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
    lenisInstance.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  } else {
    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        const header = document.querySelector('.site-header');
        const offset = -(header.offsetHeight + 12);
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const destination = targetId === '#top' ? 0 : targetElem;
        if (reduceMotion) {
          lenisInstance.scrollTo(destination, { offset, immediate: true });
        } else {
          lenisInstance.scrollTo(destination, { offset, duration: 1.0 });
        }
      }
    });
  });
}

/* =========================================================
   MODULE 2: Three.js Deep Cosmic Starfield (No Planet)
   ========================================================= */
function initRealisticCosmos() {
  const canvas = document.getElementById('webglCanvas');
  if (!canvas || typeof THREE === 'undefined') return;

  // Scene & Camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);
  camera.position.set(0, 0, 22);

  // High-performance WebGL Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Lighting (Warm Soviet Studio Incandescent & Tungsten Spots)
  const ambientLight = new THREE.AmbientLight(0x1a1512, 0.9);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xfffaed, 2.2); // Warm 3200K tungsten lamp
  keyLight.position.set(18, 12, 14);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0xe5a93c, 0.85); // Warm gold rim
  rimLight.position.set(-18, -10, -8);
  scene.add(rimLight);

  // Deep Space Multi-Spectral Starfield (3,200 stars - 35mm Optical Dust & Warm Specks)
  const starCount = 3200;
  const starGeom = new THREE.BufferGeometry();
  const starPositions = new Float32Array(starCount * 3);
  const starColors = new Float32Array(starCount * 3);

  const colorIvory = new THREE.Color(0xf5f0e6);
  const colorGold = new THREE.Color(0xe5a93c);
  const colorAmber = new THREE.Color(0xf5cf7a);
  const colorSepia = new THREE.Color(0xd8c29d);
  const colorTungsten = new THREE.Color(0xffecd2);

  for (let i = 0; i < starCount * 3; i += 3) {
    starPositions[i] = (Math.random() - 0.5) * 120;
    starPositions[i + 1] = (Math.random() - 0.5) * 100;
    starPositions[i + 2] = (Math.random() - 0.5) * 120;

    const rnd = Math.random();
    let col = colorIvory;
    if (rnd < 0.28) col = colorGold;
    else if (rnd < 0.54) col = colorAmber;
    else if (rnd < 0.74) col = colorSepia;
    else if (rnd < 0.90) col = colorTungsten;

    starColors[i] = col.r;
    starColors[i + 1] = col.g;
    starColors[i + 2] = col.b;
  }

  starGeom.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  starGeom.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

  const starMat = new THREE.PointsMaterial({
    size: 0.045,
    vertexColors: true,
    transparent: true,
    opacity: 0.88,
    blending: THREE.AdditiveBlending
  });
  const starfield = new THREE.Points(starGeom, starMat);
  scene.add(starfield);

  // Periodic Shooting Meteor Streaks (Golden Optical Flare)
  const meteorGeom = new THREE.BufferGeometry();
  const meteorPositions = new Float32Array(6);
  meteorGeom.setAttribute('position', new THREE.BufferAttribute(meteorPositions, 3));

  const meteorMat = new THREE.LineBasicMaterial({
    color: 0xf5cf7a,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    linewidth: 2
  });
  const meteor = new THREE.Line(meteorGeom, meteorMat);
  scene.add(meteor);

  let meteorActive = false;
  let meteorProgress = 0;
  let meteorStartX = 0, meteorStartY = 0, meteorStartZ = 0;
  let meteorSpeedX = 0, meteorSpeedY = 0;

  function triggerMeteor() {
    if (meteorActive) return;
    meteorActive = true;
    meteorProgress = 0;
    meteorStartX = (Math.random() - 0.2) * 40;
    meteorStartY = 15 + Math.random() * 15;
    meteorStartZ = -5 + Math.random() * 10;
    meteorSpeedX = -0.7 - Math.random() * 0.5;
    meteorSpeedY = -0.5 - Math.random() * 0.4;
  }

  setInterval(() => {
    if (Math.random() > 0.3) triggerMeteor();
  }, 7000);

  // Mouse Parallax
  let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) * 0.00035;
    mouseY = (e.clientY - window.innerHeight / 2) * 0.00035;
  }, { passive: true });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  // Render Loop
  const clock = new THREE.Clock();

  function render() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      requestAnimationFrame(render);
      return;
    }
    const elapsed = clock.getElapsedTime();

    // Damped inertia mouse rotation
    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    starfield.rotation.y = elapsed * 0.008 + targetX * 0.5;
    starfield.rotation.x = targetY * 0.5;

    // Meteor update
    if (meteorActive) {
      meteorProgress += 0.035;
      const curX = meteorStartX + meteorSpeedX * meteorProgress * 30;
      const curY = meteorStartY + meteorSpeedY * meteorProgress * 30;
      const tailX = curX - meteorSpeedX * 4;
      const tailY = curY - meteorSpeedY * 4;

      const pos = meteorGeom.attributes.position.array;
      pos[0] = curX; pos[1] = curY; pos[2] = meteorStartZ;
      pos[3] = tailX; pos[4] = tailY; pos[5] = meteorStartZ;
      meteorGeom.attributes.position.needsUpdate = true;

      if (meteorProgress < 0.3) {
        meteorMat.opacity = (meteorProgress / 0.3) * 0.85;
      } else {
        meteorMat.opacity = Math.max(0, (1 - meteorProgress) * 0.85);
      }

      if (meteorProgress >= 1) {
        meteorActive = false;
        meteorMat.opacity = 0;
      }
    }

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  render();
}

/* =========================================================
   MODULE 3: The Kinetic Director's Viewport Engine
   (Running Camera Timecode, 3D Tilt & Soundwave Engine)
   ========================================================= */
function initHeroShowcase() {
  // Kinetic Title entrance
  if (typeof gsap !== 'undefined') {
    const titleLines = document.querySelectorAll('.title-line-inner');
    if (titleLines.length > 0) {
      gsap.fromTo(titleLines, 
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
      );
    }
  }
}
const initIPhoneShowcase = initHeroShowcase;

/* =========================================================
   MODULE 4: Creative Interactions (Spotlight Cards & Magnets)
   ========================================================= */
function initCreativeInteractions() {
  // 1. Awwwards Spotlight Card Cursor Tracking
  const spotlightCards = document.querySelectorAll('.spotlight-card');
  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // 2. Magnetic Buttons with GSAP
  if (typeof gsap !== 'undefined') {
    const magneticBtns = document.querySelectorAll('[data-magnetic="true"]');
    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        gsap.to(btn, {
          x: x * 0.28,
          y: y * 0.28,
          duration: 0.35,
          ease: 'power2.out'
        });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: 'elastic.out(1, 0.4)'
        });
      });
    });
  }
}

/* =========================================================
   MODULE 5: Portfolio Grid & Per-Card Video Controls Engine
   ========================================================= */

// Active Kinescope Player instances map (iframeId -> player)
const activeKinescopePlayers = new Map();

// Global callback when Kinescope IFrame Player API finishes loading
if (typeof window !== 'undefined') {
  window.onKinescopeIframeAPIReady = function (playerFactory) {
    document.querySelectorAll('.video-card iframe').forEach(iframe => {
      if (iframe.id && !activeKinescopePlayers.has(iframe.id)) {
        playerFactory.create(iframe.id).then(player => {
          activeKinescopePlayers.set(iframe.id, player);
        }).catch(() => {});
      }
    });
  };
}

function attachKinescopePlayer(iframe) {
  if (!iframe || !iframe.id) return;
  if (typeof window !== 'undefined' && window.Kinescope && window.Kinescope.IframePlayer) {
    try {
      window.Kinescope.IframePlayer.create(iframe.id).then(player => {
        activeKinescopePlayers.set(iframe.id, player);
      }).catch(() => {});
    } catch (e) {}
  }
}

function applyKinescopeSound(iframe, shouldUnmute) {
  if (!iframe) return;

  // 1. Direct Kinescope Player API SDK if attached
  const player = activeKinescopePlayers.get(iframe.id);
  if (player) {
    if (shouldUnmute) {
      if (typeof player.unmute === 'function') player.unmute().catch(() => {});
      if (typeof player.setMuted === 'function') player.setMuted(false).catch(() => {});
      if (typeof player.setVolume === 'function') player.setVolume(1).catch(() => {});
    } else {
      if (typeof player.mute === 'function') player.mute().catch(() => {});
      if (typeof player.setMuted === 'function') player.setMuted(true).catch(() => {});
    }
  }

  // 2. High-compatibility multi-protocol postMessage fallback
  if (iframe.contentWindow) {
    const action = shouldUnmute ? 'unmute' : 'mute';
    const origins = ['*', 'https://kinescope.io', 'https://player.kinescope.io'];

    origins.forEach(origin => {
      try {
        iframe.contentWindow.postMessage(JSON.stringify({ method: action }), origin);
        iframe.contentWindow.postMessage(JSON.stringify({ type: action }), origin);
        iframe.contentWindow.postMessage(JSON.stringify({ action: action }), origin);
        iframe.contentWindow.postMessage({ method: action }, origin);
        iframe.contentWindow.postMessage({ type: action }, origin);
        iframe.contentWindow.postMessage({ action: action }, origin);
        iframe.contentWindow.postMessage({ type: `kinescope.player.${action}` }, origin);

        if (shouldUnmute) {
          iframe.contentWindow.postMessage(JSON.stringify({ method: 'setVolume', value: 1 }), origin);
          iframe.contentWindow.postMessage({ type: 'setVolume', value: 1 }, origin);
        }
      } catch (err) {}
    });
  }
}

function muteAllOtherVideos(exceptCard) {
  document.querySelectorAll('.video-card').forEach(c => {
    if (c === exceptCard) return;
    const sBtn = c.querySelector('.sound-btn');
    const sMuted = c.querySelector('.sound-icon-muted');
    const sUnmuted = c.querySelector('.sound-icon-unmuted');
    const ifr = c.querySelector('iframe');
    const vid = c.querySelector('video');

    if (sBtn && sBtn.getAttribute('data-state') === 'unmuted') {
      sBtn.setAttribute('data-state', 'muted');
      sBtn.classList.remove('is-active');
      sBtn.setAttribute('title', 'Включить звук');
      sBtn.setAttribute('aria-label', 'Включить звук');
      if (sMuted) sMuted.style.display = 'block';
      if (sUnmuted) sUnmuted.style.display = 'none';
      if (ifr) applyKinescopeSound(ifr, false);
      if (vid) vid.muted = true;
    }
  });
}

function toggleCardFullscreen(videoBox, iframe, fsBtn, fsIconEnter, fsIconExit) {
  const isCurrentlyFullscreen = 
    document.fullscreenElement === videoBox || 
    document.webkitFullscreenElement === videoBox ||
    document.fullscreenElement === iframe ||
    document.webkitFullscreenElement === iframe ||
    (document.fullscreenElement && videoBox && videoBox.contains(document.fullscreenElement));

  if (isCurrentlyFullscreen) {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    const player = iframe ? activeKinescopePlayers.get(iframe.id) : null;
    if (player && typeof player.setFullscreen === 'function') {
      player.setFullscreen(false).catch(() => {});
    }
  } else {
    const target = videoBox || iframe;
    if (target.requestFullscreen) {
      target.requestFullscreen().catch(() => {
        if (iframe && iframe.requestFullscreen) {
          iframe.requestFullscreen().catch(() => {});
        }
      });
    } else if (target.webkitRequestFullscreen) {
      target.webkitRequestFullscreen();
    } else if (iframe && iframe.webkitEnterFullscreen) {
      iframe.webkitEnterFullscreen();
    }

    const player = iframe ? activeKinescopePlayers.get(iframe.id) : null;
    if (player && typeof player.setFullscreen === 'function') {
      player.setFullscreen(true).catch(() => {});
    }
  }
}

function handleFullscreenChange() {
  const fsElem = document.fullscreenElement || document.webkitFullscreenElement;
  document.querySelectorAll('.video-card').forEach(card => {
    const box = card.querySelector('.video-ratio-box');
    const ifr = card.querySelector('iframe');
    const fsBtn = card.querySelector('.fullscreen-btn');
    const enterIcon = card.querySelector('.fs-icon-enter');
    const exitIcon = card.querySelector('.fs-icon-exit');
    if (!fsBtn || !enterIcon || !exitIcon) return;

    const isActive = fsElem && (fsElem === box || fsElem === ifr || (box && box.contains(fsElem)));
    if (isActive) {
      enterIcon.style.display = 'none';
      exitIcon.style.display = 'block';
      fsBtn.setAttribute('title', 'Выйти из полноэкранного режима');
      fsBtn.setAttribute('aria-label', 'Выйти из полноэкранного режима');
      fsBtn.classList.add('is-active');
    } else {
      enterIcon.style.display = 'block';
      exitIcon.style.display = 'none';
      fsBtn.setAttribute('title', 'Во весь экран');
      fsBtn.setAttribute('aria-label', 'Во весь экран');
      fsBtn.classList.remove('is-active');
    }
  });
}

document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

function initPortfolioTabs() {
  const filterButtons = document.querySelectorAll('#portfolioFilter .filter-btn');

  // Immediately render and autoplay default category
  renderPortfolio('restaurants');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const catKey = btn.getAttribute('data-cat');
      if (btn.classList.contains('active')) return;

      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      renderPortfolio(catKey);
    });
  });

  // Preload all category poster images during browser idle time so tab switches are 0ms instant
  preloadAllPosters();
}

function preloadAllPosters() {
  function runPreload() {
    Object.values(portfolioData).forEach(cat => {
      if (cat.videos) {
        cat.videos.forEach(v => {
          const posterUrl = v.poster || (v.src ? v.src.replace('.mp4', '-poster.jpg') : '');
          if (posterUrl) {
            const img = new Image();
            img.src = posterUrl;
          }
        });
      }
    });
  }

  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    window.requestIdleCallback(runPreload);
  } else {
    setTimeout(runPreload, 1200);
  }
}

function renderPortfolio(categoryKey) {
  const grid = document.getElementById('portfolioGrid');
  const catData = portfolioData[categoryKey];
  if (!grid || !catData) return;

  // 1. Deactivate current active pane and pause background videos to save CPU
  const activePane = grid.querySelector('.portfolio-pane.active-pane');
  if (activePane) {
    if (activePane.getAttribute('data-cat') === categoryKey) return; // already active
    activePane.classList.remove('active-pane');
    activePane.querySelectorAll('video').forEach(v => {
      try { v.pause(); } catch(e) {}
    });
  }

  // 2. High-Performance DOM Keep-Alive Cache:
  // If this tab was opened previously, it is already buffered in memory!
  let targetPane = grid.querySelector(`.portfolio-pane[data-cat="${categoryKey}"]`);
  if (targetPane) {
    targetPane.classList.add('active-pane');
    // Instantly resume playback with 0ms delay!
    targetPane.querySelectorAll('video').forEach(v => {
      v.play().catch(() => {});
    });
    return;
  }

  // 3. First time opening this tab: construct the pane with instant sharp posters
  targetPane = document.createElement('div');
  targetPane.className = `portfolio-pane active-pane ${catData.type === 'horizontal' ? 'horizontal-grid' : 'vertical-grid'}`;
  targetPane.setAttribute('data-cat', categoryKey);

  catData.videos.forEach((video, index) => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.setAttribute('data-video-id', video.id);

    const uniqueId = `kinescope-${categoryKey}-${index}-${video.id}`;
    const posterSrc = video.poster || (video.src ? video.src.replace('.mp4', '-poster.jpg') : '');

    if (catData.isNative) {
      // CUSTOM NATIVE VIDEO PLAYER: Pure GPU-Accelerated <video>, Zero Iframes, 0ms Autoplay with Instant Sharp Poster
      card.innerHTML = `
        <div class="video-ratio-box ${catData.type}">
          <div class="native-video-player">
            <video 
              src="${video.src}" 
              poster="${posterSrc}" 
              playsinline 
              muted 
              loop 
              autoplay 
              preload="auto">
            </video>
            
            <div class="native-play-indicator" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>

            <div class="video-card-hud">
              <button class="video-hud-btn sound-btn" aria-label="Включить звук" title="Включить звук" data-state="muted">
                <svg class="sound-icon-muted" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
                <svg class="sound-icon-unmuted" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
              </button>
              <button class="video-hud-btn fullscreen-btn" aria-label="Во весь экран" title="Во весь экран" data-state="normal">
                <svg class="fs-icon-enter" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
                </svg>
                <svg class="fs-icon-exit" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;">
                  <path d="M4 14h6v6M20 10h-6V4M14 10l7-7M10 14l-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      `;

      const vid = card.querySelector('video');
      const soundBtn = card.querySelector('.sound-btn');
      const soundMuted = card.querySelector('.sound-icon-muted');
      const soundUnmuted = card.querySelector('.sound-icon-unmuted');
      const fsBtn = card.querySelector('.fullscreen-btn');
      const fsIconEnter = card.querySelector('.fs-icon-enter');
      const fsIconExit = card.querySelector('.fs-icon-exit');
      const playInd = card.querySelector('.native-play-indicator');
      const videoBox = card.querySelector('.video-ratio-box');

      vid.addEventListener('click', () => {
        if (vid.paused) {
          vid.play();
          playInd.classList.remove('is-paused');
        } else {
          vid.pause();
          playInd.classList.add('is-paused');
        }
      });

      soundBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        vid.muted = !vid.muted;
        if (!vid.muted) {
          muteAllOtherVideos(card);
          soundBtn.setAttribute('data-state', 'unmuted');
          soundBtn.classList.add('is-active');
          soundBtn.setAttribute('title', 'Выключить звук');
          soundBtn.setAttribute('aria-label', 'Выключить звук');
          soundMuted.style.display = 'none';
          soundUnmuted.style.display = 'block';
        } else {
          soundBtn.setAttribute('data-state', 'muted');
          soundBtn.classList.remove('is-active');
          soundBtn.setAttribute('title', 'Включить звук');
          soundBtn.setAttribute('aria-label', 'Включить звук');
          soundMuted.style.display = 'block';
          soundUnmuted.style.display = 'none';
        }
      });

      fsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleCardFullscreen(videoBox, vid, fsBtn, fsIconEnter, fsIconExit);
      });

      vid.play().catch(() => {});
    } else {
      // KINESCOPE PLAYER: Immediate Autoplay Mode with 720p Optimized Stream & Boutique HUD Controls
      card.innerHTML = `
        <div class="video-ratio-box ${catData.type}">
          <iframe 
            id="${uniqueId}"
            src="https://kinescope.io/embed/${video.id}?autoplay=1&muted=1&loop=1&controls=0&preload=auto&quality=720p&dnt=1&playsinline=1" 
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;" 
            frameborder="0" 
            allowfullscreen 
            width="1080" 
            height="1920"
            loading="eager"
            allowtransparency="true"
            style="background-color: #000000 !important; color-scheme: dark !important; opacity: 1 !important;">
          </iframe>

          <div class="video-card-hud">
            <button class="video-hud-btn sound-btn" aria-label="Включить звук" title="Включить звук" data-state="muted">
              <svg class="sound-icon-muted" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
              </svg>
              <svg class="sound-icon-unmuted" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
            </button>
            <button class="video-hud-btn fullscreen-btn" aria-label="Во весь экран" title="Во весь экран" data-state="normal">
              <svg class="fs-icon-enter" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
              </svg>
              <svg class="fs-icon-exit" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;">
                <path d="M4 14h6v6M20 10h-6V4M14 10l7-7M10 14l-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      `;

      const iframe = card.querySelector('iframe');
      const videoBox = card.querySelector('.video-ratio-box');
      const soundBtn = card.querySelector('.sound-btn');
      const soundMuted = card.querySelector('.sound-icon-muted');
      const soundUnmuted = card.querySelector('.sound-icon-unmuted');
      const fsBtn = card.querySelector('.fullscreen-btn');
      const fsIconEnter = card.querySelector('.fs-icon-enter');
      const fsIconExit = card.querySelector('.fs-icon-exit');

      // Attach to Kinescope Player API SDK
      attachKinescopePlayer(iframe);

      // Sound button handler
      soundBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isMuted = soundBtn.getAttribute('data-state') === 'muted';
        if (isMuted) {
          muteAllOtherVideos(card);
          soundBtn.setAttribute('data-state', 'unmuted');
          soundBtn.classList.add('is-active');
          soundBtn.setAttribute('title', 'Выключить звук');
          soundBtn.setAttribute('aria-label', 'Выключить звук');
          soundMuted.style.display = 'none';
          soundUnmuted.style.display = 'block';
          applyKinescopeSound(iframe, true);
        } else {
          soundBtn.setAttribute('data-state', 'muted');
          soundBtn.classList.remove('is-active');
          soundBtn.setAttribute('title', 'Включить звук');
          soundBtn.setAttribute('aria-label', 'Включить звук');
          soundMuted.style.display = 'block';
          soundUnmuted.style.display = 'none';
          applyKinescopeSound(iframe, false);
        }
      });

      // Fullscreen button handler
      fsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleCardFullscreen(videoBox, iframe, fsBtn, fsIconEnter, fsIconExit);
      });
    }

    targetPane.appendChild(card);
  });

  grid.appendChild(targetPane);

  // Stagger entrance with GSAP for newly created pane
  if (typeof gsap !== 'undefined') {
    gsap.fromTo(
      targetPane.querySelectorAll('.video-card'),
      { opacity: 0, y: 16, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.04, ease: 'power2.out' }
    );
  }
}

/* =========================================================
   MODULE 6: Mobile Menu Toggle
   ========================================================= */
function initMobileMenu() {
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('navMenu');
  if (!toggle || !menu) return;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      menu.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.toggle('open');
    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close when clicking outside of menu and toggle
  document.addEventListener('click', (e) => {
    if (menu.classList.contains('open') && !menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* =========================================================
   MODULE 7: Dual Running Marquee & Brand Interactions
   ========================================================= */
function initClientsInteractions() {
  const brandItems = document.querySelectorAll('.marquee-brand-item');

  brandItems.forEach(item => {
    item.addEventListener('click', () => {
      const text = item.textContent.toLowerCase();
      if (text.includes('твой бренд')) {
        const contactSection = document.getElementById('contacts');
        if (contactSection) {
          if (typeof lenisInstance !== 'undefined' && lenisInstance) {
            lenisInstance.scrollTo(contactSection, { offset: -30, duration: 1.2 });
          } else {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else {
        const casesSection = document.getElementById('cases');
        if (casesSection) {
          if (typeof lenisInstance !== 'undefined' && lenisInstance) {
            lenisInstance.scrollTo(casesSection, { offset: -30, duration: 1.2 });
          } else {
            casesSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  });
}


/* =========================================================
   MODULE 3.8: Director's Master Cinema Viewport & Reel Switcher
   (Full-size pristine 9:16 video player with live switcher & auto-play)
   ========================================================= */
const heroReelPlaylist = [
  {
    id: "psqw8T1BitivaccPA2fWq5",
    cat: "restaurants",
    niche: "РЕСТОРАНЫ",
    title: "Гастробар & Стейкхаус",
    views: "✦ 1.8M просмотров",
    poster: "https://edge-dallas-1.kinescopecdn.net/748cc9ed-b657-4402-9235-db459d278535/posters/0c6c03ae-812e-43f6-ae7d-1cdfd46d0768/poster_lg/ec9a7476-3f22-46e9-8dbc-c315b4cd72ec.jpg"
  },
  {
    id: "6PP6PjHzCUnJKBbWUR2m9g",
    cat: "auto",
    niche: "АВТО НА ЗАКАЗ",
    title: "Премиум кроссовер",
    views: "✦ 2.4M просмотров",
    poster: ""
  },
  {
    id: "3VYZwoarHrpRzo9GqBT6P3",
    cat: "houses",
    niche: "ЗАГОРОДНЫЕ ДОМА",
    title: "Виллы & Фахверк",
    views: "✦ 950K просмотров",
    poster: ""
  },
  {
    id: "sCex4kjETwBdtttzH8DNGK",
    cat: "experts",
    niche: "ЭКСПЕРТЫ",
    title: "Личный бренд & Бизнес",
    views: "✦ 1.2M просмотров",
    poster: ""
  },
  {
    id: "0ZwY9GnjzSXtRnUS17R85L",
    cat: "barbershops",
    niche: "БАРБЕРШОПЫ",
    title: "Флагманский барбершоп",
    views: "✦ 820K просмотров",
    poster: ""
  },
  {
    id: "p6GTfaGkdb8PXWHvNSw9p3",
    cat: "furniture",
    niche: "МЕБЕЛЬ",
    title: "Дизайнерские кухни",
    views: "✦ 740K просмотров",
    poster: ""
  },
  {
    id: "8GBN4wssHrALP9hPkZXW8W",
    cat: "commercial",
    niche: "РЕКЛАМА",
    title: "Имиджевый промо-ролик",
    views: "✦ 3.1M просмотров",
    poster: ""
  },
  {
    id: "btpQx7Yjaa8hzkcHP22TdW",
    cat: "community",
    niche: "КОМЬЮНИТИ",
    title: "Бизнес-клуб & Нетворкинг",
    views: "✦ 680K просмотров",
    poster: ""
  }
];

function initDirectorCinema() {
  const iframe = document.getElementById('heroPlayerIframe');
  const poster = document.getElementById('heroPlayerPoster');
  const nichePill = document.getElementById('heroNichePill');
  const viewsCount = document.getElementById('heroViewsCount');
  const caseTitle = document.getElementById('heroCaseTitle');
  const caseLink = document.getElementById('heroCaseLink');
  const counterEl = document.getElementById('heroReelCounter');
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');
  const chips = document.querySelectorAll('.niche-chip');
  const progressSegments = document.querySelectorAll('#storyProgress .progress-segment');
  const soundBtn = document.getElementById('heroSoundBtn');
  const cinemaStage = document.getElementById('cinemaShowcaseStage');

  if (!iframe) return;

  let currentIndex = 0;
  let isMuted = true;
  let progressInterval = null;
  let progressPercent = 0;
  const ROTATE_DURATION = 7500; // 7.5 seconds per reel
  const TICK_MS = 60;

  function loadReel(index) {
    if (index < 0) index = heroReelPlaylist.length - 1;
    if (index >= heroReelPlaylist.length) index = 0;
    currentIndex = index;

    const item = heroReelPlaylist[currentIndex];

    // 1. Crossfade poster
    if (poster) {
      if (item.poster) {
        poster.src = item.poster;
        poster.style.opacity = '1';
      } else {
        poster.style.opacity = '0';
      }
    }

    // 2. Load stream iframe with black background guarantee & 720p optimization
    const muteParam = isMuted ? 1 : 0;
    iframe.src = `https://kinescope.io/embed/${item.id}?autoplay=1&muted=${muteParam}&loop=1&controls=0&preload=auto&quality=720p&dnt=1&playsinline=1`;

    // Once iframe loads, smoothly fade out poster
    iframe.onload = () => {
      setTimeout(() => {
        if (poster) poster.style.opacity = '0';
      }, 550);
    };

    // 3. Update meta labels
    if (nichePill) nichePill.textContent = item.niche;
    if (viewsCount) viewsCount.textContent = item.views;
    if (caseTitle) caseTitle.textContent = item.title;
    if (counterEl) counterEl.textContent = `${currentIndex + 1} / ${heroReelPlaylist.length}`;

    // 4. Update chips
    chips.forEach((c, idx) => {
      if (idx === currentIndex) c.classList.add('active');
      else c.classList.remove('active');
    });

    // 5. Update progress segments
    progressSegments.forEach((seg, idx) => {
      const fill = seg.querySelector('.progress-bar-fill');
      seg.classList.remove('active', 'completed');
      if (idx < currentIndex) {
        seg.classList.add('completed');
        if (fill) fill.style.width = '100%';
      } else if (idx === currentIndex) {
        seg.classList.add('active');
        if (fill) fill.style.width = '0%';
      } else {
        if (fill) fill.style.width = '0%';
      }
    });

    // Reset progress
    progressPercent = 0;
  }

  // Auto rotation runner
  function startProgress() {
    stopProgress();
    progressInterval = setInterval(() => {
      progressPercent += (TICK_MS / ROTATE_DURATION) * 100;
      const activeSeg = progressSegments[currentIndex]?.querySelector('.progress-bar-fill');
      if (activeSeg) activeSeg.style.width = `${Math.min(progressPercent, 100)}%`;

      if (progressPercent >= 100) {
        loadReel(currentIndex + 1);
      }
    }, TICK_MS);
  }

  function stopProgress() {
    if (progressInterval) clearInterval(progressInterval);
  }

  // Hover pauses rotation
  if (cinemaStage) {
    cinemaStage.addEventListener('mouseenter', stopProgress);
    cinemaStage.addEventListener('mouseleave', startProgress);
  }

  // Prev / Next buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      loadReel(currentIndex - 1);
      startProgress();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      loadReel(currentIndex + 1);
      startProgress();
    });
  }

  // Chips click
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const idx = parseInt(chip.getAttribute('data-index'), 10) || 0;
      loadReel(idx);
      startProgress();
    });
  });

  // Sound toggle button
  if (soundBtn) {
    soundBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      isMuted = !isMuted;
      const soundText = soundBtn.querySelector('.sound-btn-text');

      const item = heroReelPlaylist[currentIndex];
      const muteParam = isMuted ? 1 : 0;
      iframe.src = `https://kinescope.io/embed/${item.id}?autoplay=1&muted=${muteParam}&loop=1&controls=0&preload=auto&quality=720p&dnt=1&playsinline=1`;
      applyKinescopeSound(iframe, !isMuted);

      if (isMuted) {
        soundBtn.classList.remove('unmuted');
        if (soundText) soundText.textContent = 'ЗВУК';
      } else {
        soundBtn.classList.add('unmuted');
        if (soundText) soundText.textContent = 'ВКЛЮЧЕН';
      }
    });
  }

  // Click on case link -> scroll to #cases and activate matching category tab
  if (caseLink) {
    caseLink.addEventListener('click', (e) => {
      e.preventDefault();
      const item = heroReelPlaylist[currentIndex];
      const targetTab = document.querySelector(`#portfolioFilter .filter-btn[data-cat="${item.cat}"]`);
      if (targetTab) targetTab.click();

      const casesSection = document.getElementById('cases');
      if (casesSection) {
        if (typeof lenisInstance !== 'undefined' && lenisInstance) {
          lenisInstance.scrollTo(casesSection, { offset: -30, duration: 1.1 });
        } else {
          casesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  // Subtle 3D tilt on hero mousemove
  const heroSection = document.getElementById('hero');
  if (heroSection && cinemaStage) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      cinemaStage.style.transform = `perspective(1200px) rotateY(${(x * 10).toFixed(2)}deg) rotateX(${(-y * 8).toFixed(2)}deg)`;
    });

    heroSection.addEventListener('mouseleave', () => {
      cinemaStage.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg)';
    });
  }

  // Initialize first reel & start rotation
  loadReel(0);
  startProgress();
}


/* =========================================================
   MODULE 3.2: Awwwards Centered Hero Intro Choreography
   ========================================================= */
function initHeroCenteredIntro() {
  const hero = document.querySelector('.hero-wall');
  if (!hero) return;
  const videos = [...hero.querySelectorAll('video')];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let userPaused = reduced.matches;
  let visible = true;
  const sync = () => {
    const running = visible && !document.hidden && !userPaused;
    hero.classList.toggle('wall-paused', !running);
    hero.classList.toggle('wall-motion-enabled', running);
    videos.forEach(video => {
      if (running) {
        if (!video.src) video.src = video.dataset.src;
        video.play().catch(() => {});
      } else video.pause();
    });
  };
  reduced.addEventListener('change', () => { userPaused = reduced.matches; sync(); });
  document.addEventListener('visibilitychange', sync);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }, {threshold: 0.05}).observe(hero);
  }
  sync();
}
const initHeroMockup = initHeroCenteredIntro;

/* =========================================================
   MODULE 4.5: Roles Comparison Animation (Reels-Producer vs SMM)
   ========================================================= */
function initAudienceMap() {
  const map = document.querySelector('#rolesCompare .audience-map');
  if (!map) return;
  const controls = map.querySelector('.audience-map-controls');
  const buttons = [...controls.querySelectorAll('button')];
  const caption = map.querySelector('.audience-map-mode');
  const captions = { all: 'Привлечение и работа с аудиторией', reels: 'Новая аудитория', smm: 'Работа с аудиторией' };
  let selected = 'all';
  const show = mode => { map.dataset.mode = mode; caption.textContent = captions[mode]; };
  controls.hidden = false;
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      selected = button.dataset.audienceMode;
      buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      show(selected);
    });
    button.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') show(button.dataset.audienceMode); });
    button.addEventListener('pointerleave', () => show(selected));
    button.addEventListener('focus', () => show(button.dataset.audienceMode));
    button.addEventListener('blur', () => show(selected));
  });
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        map.classList.add('audience-arrived');
        observer.disconnect();
      }
    }, { threshold: .25 });
    observer.observe(map);
  }
}

function initRolesCompareAnimation() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const compareSection = document.getElementById('rolesCompare');
  if (!compareSection) return;

  const producerCard = compareSection.querySelector('.compare-card-producer');
  const smmCard = compareSection.querySelector('.compare-card-smm');
  const summaryVerdict = compareSection.querySelector('.compare-summary-verdict');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: compareSection,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  if (producerCard) {
    tl.fromTo(producerCard, 
      { y: 35, opacity: 0, scale: 0.97 }, 
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }
    );
  }

  if (smmCard) {
    tl.fromTo(smmCard, 
      { y: 35, opacity: 0, scale: 0.97 }, 
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }, 
      '-=0.5'
    );
  }

  if (summaryVerdict) {
    tl.fromTo(summaryVerdict,
      { y: 25, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out' },
      '-=0.3'
    );
  }
}

/* =========================================================
   MODULE 4.6: Serpentine Snake Process Flow & 3D Fly-In
   (Слева направо ➔ Поворот ⤹ Справа налево + «Вылетают при скролле»)
   ========================================================= */
function initProcessSnakeFlow() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const stage = document.getElementById('processSnakeStage');
  if (!stage) return;

  const card1 = stage.querySelector('.snake-card-1');
  const conn12 = stage.querySelector('.connector-1-2');
  const card2 = stage.querySelector('.snake-card-2');
  const conn23 = stage.querySelector('.connector-2-3');
  const card3 = stage.querySelector('.snake-card-3');
  const turn = stage.querySelector('.snake-turn-transition');
  const card4 = stage.querySelector('.snake-card-4');
  const conn45 = stage.querySelector('.connector-4-5');
  const card5 = stage.querySelector('.snake-card-5');
  const conn56 = stage.querySelector('.connector-5-6');
  const card6 = stage.querySelector('.snake-card-6');

  const isDesktop = window.innerWidth > 768;

  if (isDesktop) {
    // Master Snake Choreography: 01 -> 02 -> 03 -> turn -> 04 -> 05 -> 06
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stage,
        start: 'top 78%',
        toggleActions: 'play none none none'
      }
    });

    // 01 Договор flies in from left
    if (card1) {
      tl.fromTo(card1, 
        { opacity: 0, x: -70, rotateY: -10 },
        { opacity: 1, x: 0, rotateY: 0, duration: 0.75, ease: 'power3.out' }
      );
    }

    // Connector 1 -> 2 draws forward
    if (conn12) {
      tl.fromTo(conn12, 
        { opacity: 0, scaleX: 0, transformOrigin: 'left center' },
        { opacity: 1, scaleX: 1, duration: 0.35, ease: 'power2.out' },
        '-=0.3'
      );
    }

    // 02 Сценарий flies in from top
    if (card2) {
      tl.fromTo(card2, 
        { opacity: 0, y: -50, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.75, ease: 'power3.out' },
        '-=0.2'
      );
    }

    // Connector 2 -> 3 draws forward
    if (conn23) {
      tl.fromTo(conn23, 
        { opacity: 0, scaleX: 0, transformOrigin: 'left center' },
        { opacity: 1, scaleX: 1, duration: 0.35, ease: 'power2.out' },
        '-=0.3'
      );
    }

    // 03 Форматы flies in from right
    if (card3) {
      tl.fromTo(card3, 
        { opacity: 0, x: 70, rotateY: 10 },
        { opacity: 1, x: 0, rotateY: 0, duration: 0.75, ease: 'power3.out' },
        '-=0.2'
      );
    }

    // Serpentine Turn lights up
    if (turn) {
      tl.fromTo(turn, 
        { opacity: 0, scale: 0.85, y: -15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.5)' },
        '-=0.3'
      );
    }

    // 04 Съёмка flies in from right
    if (card4) {
      tl.fromTo(card4, 
        { opacity: 0, x: 70, rotateY: 10 },
        { opacity: 1, x: 0, rotateY: 0, duration: 0.75, ease: 'power3.out' },
        '-=0.2'
      );
    }

    // Connector 4 -> 5 draws leftward
    if (conn45) {
      tl.fromTo(conn45, 
        { opacity: 0, scaleX: 0, transformOrigin: 'right center' },
        { opacity: 1, scaleX: 1, duration: 0.35, ease: 'power2.out' },
        '-=0.3'
      );
    }

    // 05 Монтаж flies in from bottom
    if (card5) {
      tl.fromTo(card5, 
        { opacity: 0, y: 50, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.75, ease: 'power3.out' },
        '-=0.2'
      );
    }

    // Connector 5 -> 6 draws leftward
    if (conn56) {
      tl.fromTo(conn56, 
        { opacity: 0, scaleX: 0, transformOrigin: 'right center' },
        { opacity: 1, scaleX: 1, duration: 0.35, ease: 'power2.out' },
        '-=0.3'
      );
    }

    // 06 Отдаём ролики (Golden Finish) flies in with spring
    if (card6) {
      tl.fromTo(card6, 
        { opacity: 0, x: -70, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 0.85, ease: 'back.out(1.4)' },
        '-=0.2'
      );
    }
  } else {
    // Mobile 2x3 Grid Entrance: Smooth, responsive, vertical emergence (Zero Horizontal Displacement)
    const mobileTl = gsap.timeline({
      scrollTrigger: {
        trigger: stage,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });

    const orderedCards = [card1, card2, card3, card4, card5, card6].filter(Boolean);
    orderedCards.forEach((card, idx) => {
      mobileTl.fromTo(card, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, 
        idx === 0 ? 0 : '-=0.28'
      );
    });
  }

  // Tactile 3D Tilt Micro-Interaction on mousemove
  const allCards = stage.querySelectorAll('.snake-card');
  allCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const tiltX = (y / (rect.height / 2)) * -6;
      const tiltY = (x / (rect.width / 2)) * 6;
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}
