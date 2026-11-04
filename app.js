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
  initHeroMockup();
  initHeroCounters();
  initDirectorCinema();
  initClientsInteractions();
  initCreativeInteractions();
  initMobileMenu();
  initPortfolioTabs();
  initRolesCompareAnimation();
  initProcessSnakeFlow();
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
  const statsContainer = document.getElementById('heroStats') || document.querySelector('.hero-metrics-stage') || document.querySelector('.hero-stats-borderless') || document.getElementById('heroStatsDeck');
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

    // If real CDN poster is defined, render image; otherwise no text placeholder
    const posterMarkup = video.poster
      ? `<img 
          class="video-native-poster" 
          src="${video.poster}" 
          alt="${video.title || 'Evsevyev prod.'}" 
          loading="eager" 
          decoding="async"
        >`
      : '';

    card.innerHTML = `
      <div class="video-ratio-box ${catData.type}">
        <!-- 1. Kinescope Stream Player (Starts hidden at opacity: 0 behind black box/loader) -->
        <iframe 
          src="https://kinescope.io/embed/${video.id}?autoplay=1&muted=1&loop=1&controls=0&preload=auto" 
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;" 
          frameborder="0" 
          allowfullscreen 
          loading="eager"
          allowtransparency="true"
          style="background-color: #000000 !important; color-scheme: dark !important;">
        </iframe>

        <!-- 2. Real Poster if available (z-index: 2) -->
        ${posterMarkup}

        <!-- 3. Minimalist Video Loader: Play Button & Golden Progress Bar (z-index: 10) -->
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
      </div>
    `;

    const loader = card.querySelector('.video-loader');
    const loaderLine = card.querySelector('.loader-line');
    const iframe = card.querySelector('iframe');
    const poster = card.querySelector('.video-native-poster');

    // 1. Start progress line animation smoothly
    requestAnimationFrame(() => {
      setTimeout(() => {
        if (loaderLine) {
          loaderLine.style.width = '100%';
        }
      }, 40);
    });

    // 2. Seamless Transition Engine:
    // At 2.0s (after progress fills and video stream has buffered frames in background):
    // First make iframe visible underneath the loader, then smoothly dissolve the loader and poster!
    setTimeout(() => {
      if (iframe) {
        iframe.classList.add('is-ready');
      }
      setTimeout(() => {
        if (poster) {
          poster.classList.add('video-hidden');
        }
        if (loader && loader.parentNode) {
          loader.classList.add('loaded');
          setTimeout(() => {
            if (loader && loader.parentNode) {
              loader.remove();
            }
          }, 450);
        }
      }, 100);
    }, 2000);

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

    // 2. Load stream iframe with black background guarantee
    const muteParam = isMuted ? 1 : 0;
    iframe.src = `https://kinescope.io/embed/${item.id}?autoplay=1&muted=${muteParam}&loop=1&controls=0&preload=auto`;

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
      iframe.src = `https://kinescope.io/embed/${item.id}?autoplay=1&muted=${muteParam}&loop=1&controls=0&preload=auto`;

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
  if (typeof gsap !== 'undefined') {
    const heroElements = [
      '.hero-title-massive',
      '.hero-subtitle-clean',
      '.hero-cta-group',
      '.hero-metrics-stage'
    ];
    
    gsap.fromTo(heroElements, 
      { opacity: 0, y: 32 },
      { opacity: 1, y: 0, duration: 1.0, stagger: 0.14, ease: 'power3.out', delay: 0.15 }
    );
  }
}
const initHeroMockup = initHeroCenteredIntro;

/* =========================================================
   MODULE 4.5: Roles Comparison Animation (Reels-Producer vs SMM)
   ========================================================= */
function initRolesCompareAnimation() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const compareSection = document.getElementById('rolesCompare');
  if (!compareSection) return;

  const producerCard = compareSection.querySelector('.compare-card-producer');
  const smmCard = compareSection.querySelector('.compare-card-smm');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: compareSection,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  if (producerCard) {
    tl.fromTo(producerCard, 
      { y: 40, opacity: 0, scale: 0.96 }, 
      { y: 0, opacity: 1, scale: 1, duration: 0.85, ease: 'power3.out' }
    );
  }

  if (smmCard) {
    tl.fromTo(smmCard, 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' }, 
      '-=0.5'
    );
  }

  const summaryVerdict = compareSection.querySelector('.compare-summary-verdict');
  if (summaryVerdict) {
    tl.fromTo(summaryVerdict,
      { y: 30, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 0.75, ease: 'power3.out' },
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

  const isDesktop = window.innerWidth > 920;

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
    // Mobile / Tablet: Serpentine Flow Choreography without Horizontal Jitter (Zero-Displacement Standard)
    const mobileTl = gsap.timeline({
      scrollTrigger: {
        trigger: stage,
        start: 'top 82%',
        toggleActions: 'play none none none'
      }
    });

    if (card1) mobileTl.fromTo(card1, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' });
    if (conn12) mobileTl.fromTo(conn12, { opacity: 0 }, { opacity: 1, duration: 0.25 }, '-=0.2');
    if (card2) mobileTl.fromTo(card2, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, '-=0.15');
    if (conn23) mobileTl.fromTo(conn23, { opacity: 0 }, { opacity: 1, duration: 0.25 }, '-=0.2');
    if (card3) mobileTl.fromTo(card3, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, '-=0.15');
    if (turn) mobileTl.fromTo(turn, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.35, ease: 'back.out(1.4)' }, '-=0.1');
    if (card4) mobileTl.fromTo(card4, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, '-=0.1');
    if (conn45) mobileTl.fromTo(conn45, { opacity: 0 }, { opacity: 1, duration: 0.25 }, '-=0.2');
    if (card5) mobileTl.fromTo(card5, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, '-=0.15');
    if (conn56) mobileTl.fromTo(conn56, { opacity: 0 }, { opacity: 1, duration: 0.25 }, '-=0.2');
    if (card6) mobileTl.fromTo(card6, { opacity: 0, y: 18, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: 'back.out(1.3)' }, '-=0.15');
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
