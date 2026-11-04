// =========================================================
// EVSEVYEV PROD. — Photorealistic Space & Minimalist Engine
// High-Performance Video Facade & Interactive iPhone Player
// =========================================================

// Database of Kinescope case studies (10 categories, 49 real video IDs)
const portfolioData = {
  restaurants: {
    name: 'Рестораны',
    type: 'vertical',
    videos: [
      { id: "psqw8T1BitivaccPA2fWq5", title: "Гастробар & Стейкхаус", poster: "https://edge-dallas-1.kinescopecdn.net/748cc9ed-b657-4402-9235-db459d278535/posters/0c6c03ae-812e-43f6-ae7d-1cdfd46d0768/poster_lg/ec9a7476-3f22-46e9-8dbc-c315b4cd72ec.jpg" },
      { id: "wMCt8ko4sMZZLC1MiR4C6k", title: "Мясной ресторан", poster: "https://edge-dallas-1.kinescopecdn.net/748cc9ed-b657-4402-9235-db459d278535/posters/ba6270f8-0c8e-453d-94e5-afbd771eaef1/poster_lg/d0e54783-4f6d-4b45-bcc3-b7c515dcaf65.jpg" },
      { id: "7DQ1zwM62tHkNMJ9tuwVgu", title: "Коктейльный бар", poster: "https://edge-dallas-1.kinescopecdn.net/748cc9ed-b657-4402-9235-db459d278535/posters/3693a728-1697-4b8d-96db-823afe56bf62/poster_lg/8c3ae369-608c-4c39-a6a6-1d31f71ac552.jpg" },
      { id: "dfTWJRt9YLsfcGkE8UTpG8", title: "Авторская кухня" },
      { id: "358vJ1H5u6fXmeqLkBhmAX", title: "Винный ресторан" },
      { id: "uM1WpK3Tf1iA6HELth1A1n", title: "Шеф-тейбл" },
      { id: "nwsGoh9iF1v8NxPYWsb5YC", title: "Кофейня & Завтраки" },
      { id: "sPAyw6necPE9hQkahKpum9", title: "Азиатский концепт" }
    ]
  },
  experts: {
    name: 'Эксперты',
    type: 'vertical',
    videos: [
      { id: "m5RjbCyGDZvejyagbHjC6p", title: "Бизнес-консалтинг" },
      { id: "sCex4kjETwBdtttzH8DNGK", title: "Личный бренд" },
      { id: "35vQJrT4Shx1eY6E2gsMw4", title: "Инвестиции & Финансы" },
      { id: "3UaBnopGYMx85xojYCJvrw", title: "Психология & Коучинг" },
      { id: "iESYsqSaVW4owNBG86t3zS", title: "Медицина & Здоровье" },
      { id: "i7bYAaaDEPz2Fu6fqTWhxd", title: "Недвижимость" },
      { id: "ttyHXXRPNPy4rhR8LZh1Tf", title: "Юрист & Право" },
      { id: "6DbyPnQw1KgEbVRSV5hnNH", title: "Маркетинг" }
    ]
  },
  auto: {
    name: 'Авто на заказ',
    type: 'vertical',
    videos: [
      { id: "6PP6PjHzCUnJKBbWUR2m9g", title: "Премиум кроссовер" },
      { id: "svHACvgUE8mDsCQMj8X3Bb", title: "Спорткар на заказ" },
      { id: "9KRPNd18jL8iPZxgc91Egd", title: "Подбор авто из Кореи" },
      { id: "nACPKuY9kq1osCiTEt3tMd", title: "Выдача автомобиля" }
    ]
  },
  houses: {
    name: 'Загородные дома',
    type: 'vertical',
    videos: [
      { id: "3VYZwoarHrpRzo9GqBT6P3", title: "Коттеджный поселок" },
      { id: "vgrMZd4hYk8od8pcSretaE", title: "Строительство фахверк" },
      { id: "3pX8M2WYZH8aMbmXbhsWnM", title: "Дизайн виллы" },
      { id: "tQW9UdA7rvywqDQipHzjp2", title: "Рум-тур дома" }
    ]
  },
  commercial: {
    name: 'Реклама',
    type: 'horizontal',
    videos: [
      { id: "8GBN4wssHrALP9hPkZXW8W", title: "Имиджевый промо-ролик" },
      { id: "vaVFDUV3KxUXLc2KFcHbc8", title: "Корпоративное видео" },
      { id: "eFFmtmZVVG5ydQ6ubYXXU9", title: "Рекламный ролик" }
    ]
  },
  furniture: {
    name: 'Мебель',
    type: 'vertical',
    videos: [
      { id: "p6GTfaGkdb8PXWHvNSw9p3", title: "Дизайнерские кухни" },
      { id: "8jWYVWjXbHKJNEoSxoY9Hh", title: "Шоурум мебели" },
      { id: "oABWBRTwuS2CFvGitXcWXd", title: "Мягкая мебель" },
      { id: "dUQnwRWcJUVcq12N9NHAPa", title: "Премиум гардеробные" }
    ]
  },
  aesthetic: {
    name: 'Эстетика',
    type: 'vertical',
    videos: [
      { id: "qnmay4R5a1VnX86hzuGsdE", title: "Атмосферный визуал" },
      { id: "4ReyZGqv91TFDQ7EKFtgEe", title: "Лайфстайл контент" },
      { id: "3H9HsteHA9aoqAP9RX2zEE", title: "Кинематографичный свет" },
      { id: "5DovRTtWsgaC9r1vnaTmDC", title: "Эстетика кадра" }
    ]
  },
  community: {
    name: 'Комьюнити',
    type: 'vertical',
    videos: [
      { id: "btpQx7Yjaa8hzkcHP22TdW", title: "Бизнес-клуб" },
      { id: "iQKxeSQCSfDaaeuWvm36NQ", title: "Мастермайнд & Форум" },
      { id: "mMswtDDiZVG5q2AeaNf3JA", title: "Закрытое мероприятие" },
      { id: "w8doD7oRaG3ANGs4CED2nh", title: "Нетворкинг вечер" }
    ]
  },
  barbershops: {
    name: 'Барбершопы',
    type: 'vertical',
    videos: [
      { id: "0ZwY9GnjzSXtRnUS17R85L", title: "Флагманский барбершоп" },
      { id: "vuW1BcDXA1Jx15Hor8w14z", title: "Премиум стрижка" },
      { id: "8jhhFGBZQxKnmqn1Drcynm", title: "Мастер в кадре" },
      { id: "5SoXgA4SrSozB2LSKzYbzt", title: "Атмосфера салона" },
      { id: "gR96uxXwKKivqnmnrYBwEX", title: "Мужской уход" },
      { id: "346ARN1UELaQkFaHQw5FpL", title: "Команда барберов" }
    ]
  },
  unboxing: {
    name: 'Распаковки',
    type: 'vertical',
    videos: [
      { id: "paQqnKSjWm1KCfZXrJopYV", title: "Распаковка премиум-бренда" },
      { id: "igiKvDRLY5qGdYG2zH6gtJ", title: "Обзор новинки" },
      { id: "cSGWyw6346foBpUGFZEQCy", title: "Детали и макросъемка" },
      { id: "b1wCG5th3cYoWHAxra3fgf", title: "Эмоции от распаковки" }
    ]
  }
};

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
  initLenisScroll();
  initRealisticCosmos();
  initHeroShowcase();
  initHeroCounters();
  initClientsInteractions();
  initCreativeInteractions();
  initMobileMenu();
  initPortfolioTabs();
});

/* =========================================================
   MODULE 1: Lenis Smooth Scroll Engine
   ========================================================= */
let lenisInstance = null;

function initLenisScroll() {
  if (typeof Lenis === 'undefined') return;

  lenisInstance = new Lenis({
    duration: 1.0,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
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
        lenisInstance.scrollTo(targetElem, { offset: -50, duration: 1.0 });
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
   MODULE 3: Director's Cinema Showreel Showcase Engine
   (Smooth 3D Parallax, Sound Toggle & Pristine Playback)
   ========================================================= */
function initHeroShowcase() {
  const showcaseFrame = document.getElementById('cinemaReelFrame') || document.getElementById('iphone3D');
  const heroSection = document.getElementById('hero');
  const glare = document.querySelector('.cinema-specular-glare') || document.querySelector('.screen-specular-glare');
  const likeBtn = document.getElementById('heroLikeBtn');
  const heartWrap = document.getElementById('heroHeartWrap');
  const soundToggle = document.getElementById('heroSoundToggle');
  const reelPoster = document.getElementById('heroReelPoster');
  const reelIframe = document.getElementById('heroReelIframe');

  // 1. Hide poster smoothly once iframe loads video
  if (reelIframe && reelPoster) {
    reelIframe.addEventListener('load', () => {
      setTimeout(() => {
        reelPoster.style.opacity = '0';
      }, 700);
    });
  }

  // 2. Sound Toggle Interactivity
  let isMuted = true;
  if (soundToggle && reelIframe) {
    const iconMuted = soundToggle.querySelector('.sound-icon-muted');
    const iconUnmuted = soundToggle.querySelector('.sound-icon-unmuted');
    const pillText = soundToggle.querySelector('.sound-pill-text');

    soundToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      isMuted = !isMuted;

      // Reload iframe stream with / without mute
      const videoBase = 'https://kinescope.io/embed/psqw8T1BitivaccPA2fWq5';
      const muteParam = isMuted ? 1 : 0;
      reelIframe.src = `${videoBase}?autoplay=1&muted=${muteParam}&loop=1&controls=0&preload=auto`;

      if (isMuted) {
        soundToggle.classList.remove('unmuted');
        if (iconMuted) iconMuted.style.display = 'block';
        if (iconUnmuted) iconUnmuted.style.display = 'none';
        if (pillText) pillText.textContent = 'Звук';
      } else {
        soundToggle.classList.add('unmuted');
        if (iconMuted) iconMuted.style.display = 'none';
        if (iconUnmuted) iconUnmuted.style.display = 'block';
        if (pillText) pillText.textContent = 'Вкл.';
      }
    });
  }

  // 2.5 TV Channel Knob Mechanical Rotation Click
  const tvChannelKnob = document.getElementById('tvChannelKnob');
  let currentKnobAngle = 0;
  if (tvChannelKnob) {
    tvChannelKnob.addEventListener('click', (e) => {
      e.stopPropagation();
      currentKnobAngle = (currentKnobAngle + 30) % 360;
      if (typeof gsap !== 'undefined') {
        gsap.to(tvChannelKnob, {
          rotate: currentKnobAngle,
          duration: 0.25,
          ease: 'back.out(2)'
        });
      } else {
        tvChannelKnob.style.transform = `rotate(${currentKnobAngle}deg)`;
      }
    });
  }

  // 3. Subtle Like Button Interaction
  if (likeBtn && heartWrap) {
    likeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const countEl = likeBtn.querySelector('.action-count');
      const heartSvg = heartWrap.querySelector('svg');
      if (heartSvg) {
        heartSvg.setAttribute('fill', '#ef4444');
      }
      if (countEl) {
        countEl.textContent = '143K';
      }
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(heartWrap,
          { scale: 0.75 },
          { scale: 1.3, duration: 0.22, yoyo: true, repeat: 1, ease: 'back.out(3)' }
        );
      }
    });
  }

  // 4. Subtle Organic Floating Sine Hover
  if (typeof gsap !== 'undefined' && showcaseFrame) {
    gsap.to(showcaseFrame, {
      y: '+=6',
      duration: 3.5,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });
  }

  // 5. Interactive 3D Parallax Tilt on Mouse Move (Refined Director's Viewport)
  if (heroSection && showcaseFrame) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      if (typeof gsap !== 'undefined') {
        gsap.to(showcaseFrame, {
          rotateY: x * 8,
          rotateX: -y * 6,
          duration: 0.6,
          ease: 'power2.out',
          transformPerspective: 1200
        });

        if (glare) {
          const glareX = 50 + x * 50;
          const glareY = 50 + y * 50;
          glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.12) 0%, transparent 60%)`;
        }
      }
    });

    heroSection.addEventListener('mouseleave', () => {
      if (typeof gsap !== 'undefined') {
        gsap.to(showcaseFrame, {
          rotateY: 0,
          rotateX: 0,
          duration: 1.0,
          ease: 'power2.out'
        });
      }
    });
  }
}
const initIPhoneShowcase = initHeroShowcase;

/* =========================================================
   MODULE 3.5: Non-Jittery Cinematic Counter Engine
   (Smooth single count-up on scroll with tabular numbers)
   ========================================================= */
function initHeroCounters() {
  const counterElements = document.querySelectorAll('.stat-counter');
  let hasAnimated = false;

  function runCounters() {
    if (hasAnimated) return;
    hasAnimated = true;

    counterElements.forEach(el => {
      const target = parseFloat(el.getAttribute('data-target')) || 0;
      const duration = 1800; // ms
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Smooth exponential ease-out curve
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = Math.round(ease * target);
        el.textContent = currentVal;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = target;
        }
      }

      requestAnimationFrame(update);
    });
  }

  // Trigger strictly when visible
  const statsContainer = document.getElementById('heroStatsDeck') || document.querySelector('.hero-stats-deck') || document.querySelector('.hero-stats-bar');
  if (statsContainer && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounters();
          observer.disconnect();
        }
      });
    }, { threshold: 0.15 });
    observer.observe(statsContainer);
  } else {
    runCounters();
  }
}

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
   MODULE 5: Portfolio Grid & Per-Card Loading Engine
   ========================================================= */

function initPortfolioTabs() {
  const filterButtons = document.querySelectorAll('#portfolioFilter .filter-btn');
  renderPortfolio('restaurants');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) return;

      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const catKey = btn.getAttribute('data-cat');
      renderPortfolio(catKey);
    });
  });
}

function renderPortfolio(categoryKey) {
  const grid = document.getElementById('portfolioGrid');
  const catData = portfolioData[categoryKey];
  if (!grid || !catData) return;

  grid.className = `portfolio-grid ${catData.type === 'horizontal' ? 'horizontal-grid' : 'vertical-grid'}`;
  grid.innerHTML = '';

  catData.videos.forEach((video, index) => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.setAttribute('data-video-id', video.id);

    // If real CDN poster is defined, render image; otherwise render dark 35mm cinematic title cover
    const posterMarkup = video.poster
      ? `<img 
          class="video-native-poster" 
          src="${video.poster}" 
          alt="${video.title || 'Evsevyev prod.'}" 
          loading="eager" 
          decoding="async"
        >`
      : `<div class="video-native-poster video-cinematic-cover">
          <div class="cover-badge">35mm • SOVSCOPE</div>
          <div class="cover-title">${video.title || 'EVSEVYEV PROD.'}</div>
        </div>`;

    card.innerHTML = `
      <div class="video-ratio-box ${catData.type}">
        <!-- 1. Deep Black Canvas & Photographic / Cinematic Cover (Guarantees zero white flash) -->
        ${posterMarkup}

        <!-- 2. Minimalist Video Loader: Play Button & Golden Progress Bar -->
        <div class="video-loader">
          <div class="loader-content">
            <div class="loader-play-btn">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <div class="loader-track">
              <div class="loader-line"></div>
            </div>
          </div>
        </div>

        <!-- 3. Kinescope Dedicated Embed Player (Native black canvas, instant poster thumbnail & controls) -->
        <iframe 
          src="https://kinescope.io/embed/${video.id}?preload=auto" 
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;" 
          frameborder="0" 
          allowfullscreen 
          loading="eager"
          allowtransparency="true"
          style="background-color: #000000 !important; color-scheme: dark !important;">
        </iframe>
      </div>
    `;

    const loader = card.querySelector('.video-loader');
    const loaderLine = card.querySelector('.loader-line');
    const iframe = card.querySelector('iframe');

    // 1. Kick off golden progress line animation
    requestAnimationFrame(() => {
      setTimeout(() => {
        if (loaderLine) {
          loaderLine.style.width = '100%';
        }
      }, 50);
    });

    // 2. Synchronized Seamless Reveal Engine:
    // Ensures iframe is completely rendered & painted dark BEFORE the loader fades out!
    let isRevealed = false;
    let minTimeElapsed = false;
    let iframeHasLoaded = false;

    function completeReveal() {
      if (isRevealed) return;
      if (iframeHasLoaded && minTimeElapsed) {
        isRevealed = true;
        // Make iframe fully visible underneath the loader
        if (iframe) {
          iframe.classList.add('is-ready');
        }
        // Microscopic delay (90ms) for browser to paint the iframe frame before loader fades
        setTimeout(() => {
          if (loader && loader.parentNode) {
            loader.classList.add('loaded');
            // Clean up loader from DOM once CSS transition ends
            setTimeout(() => {
              if (loader && loader.parentNode) {
                loader.remove();
              }
            }, 450);
          }
        }, 90);
      }
    }

    if (iframe) {
      iframe.addEventListener('load', () => {
        iframeHasLoaded = true;
        completeReveal();
      });
    }

    // Minimum display time for the progress bar (1.4s) for high-end aesthetic feedback
    setTimeout(() => {
      minTimeElapsed = true;
      completeReveal();
    }, 1400);

    // Guaranteed failsafe fallback (2.4s) in case load event was suppressed by browser
    setTimeout(() => {
      if (!isRevealed) {
        isRevealed = true;
        if (iframe) {
          iframe.classList.add('is-ready');
        }
        if (loader && loader.parentNode) {
          loader.classList.add('loaded');
          setTimeout(() => {
            if (loader && loader.parentNode) {
              loader.remove();
            }
          }, 450);
        }
      }
    }, 2400);

    grid.appendChild(card);
  });

  // Stagger entrance with GSAP if available
  if (typeof gsap !== 'undefined') {
    gsap.fromTo(
      grid.querySelectorAll('.video-card'),
      { opacity: 0, y: 24, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.06, ease: 'power2.out' }
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

  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
    });
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
