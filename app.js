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
  initStudioAmbient();
  initIPhoneShowcase();
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
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5
  });

  function raf(time) {
    lenisInstance.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  if (typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
    lenisInstance.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        lenisInstance.scrollTo(targetElem, { offset: -70, duration: 1.2 });
      }
    });
  });
}

/* =========================================================
   MODULE 2: Cinematic Studio Ambient Lighting Engine
   ========================================================= */
function initStudioAmbient() {
  const spotlight = document.getElementById('studioSpotlight');
  if (!spotlight) return;

  let mouseX = window.innerWidth * 0.7;
  let mouseY = window.innerHeight * 0.35;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function renderLight() {
    // Smooth lerp damping for buttery cinematic motion
    currentX += (mouseX - currentX) * 0.045;
    currentY += (mouseY - currentY) * 0.045;

    spotlight.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(renderLight);
  }

  requestAnimationFrame(renderLight);
}

/* =========================================================
   MODULE 3: Flagship iPhone 16 Pro Showcase Engine
   (Smooth 3D Parallax, Sound Toggle & Pristine Playback)
   ========================================================= */
function initIPhoneShowcase() {
  const iphone = document.getElementById('iphone3D');
  const heroSection = document.getElementById('hero');
  const liveTime = document.getElementById('iosLiveTime');
  const glare = document.querySelector('.screen-specular-glare');
  const likeBtn = document.getElementById('heroLikeBtn');
  const heartWrap = document.getElementById('heroHeartWrap');
  const soundToggle = document.getElementById('heroSoundToggle');
  const reelPoster = document.getElementById('heroReelPoster');
  const reelIframe = document.getElementById('heroReelIframe');

  // 1. Live Digital Clock (iOS status bar)
  function updateTime() {
    if (!liveTime) return;
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    liveTime.textContent = `${hours}:${mins}`;
  }
  updateTime();
  setInterval(updateTime, 10000);

  // 2. Hide poster smoothly once iframe loads video
  if (reelIframe && reelPoster) {
    reelIframe.addEventListener('load', () => {
      setTimeout(() => {
        reelPoster.style.opacity = '0';
      }, 900);
    });
  }

  // 3. Sound Toggle Interactivity
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
        if (pillText) pillText.textContent = 'Включить звук';
      } else {
        soundToggle.classList.add('unmuted');
        if (iconMuted) iconMuted.style.display = 'none';
        if (iconUnmuted) iconUnmuted.style.display = 'block';
        if (pillText) pillText.textContent = 'Звук включен';
      }
    });
  }

  // 4. Subtle Like Button Interaction
  if (likeBtn && heartWrap) {
    likeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const countEl = likeBtn.querySelector('.action-count');
      const heartSvg = heartWrap.querySelector('svg');
      if (heartSvg) {
        heartSvg.setAttribute('fill', '#ff2d55');
      }
      if (countEl) {
        countEl.textContent = '143K';
      }
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(heartWrap,
          { scale: 0.7 },
          { scale: 1.3, duration: 0.2, yoyo: true, repeat: 1, ease: 'back.out(3)' }
        );
      }
    });
  }

  // 5. Subtle Organic Floating Sine Hover (Upright & Balanced)
  if (typeof gsap !== 'undefined' && iphone) {
    gsap.to(iphone, {
      y: '+=8',
      duration: 3.2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });
  }

  // 6. Interactive 3D Parallax Tilt on Mouse Move (Subtle, professional)
  if (heroSection && iphone) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      if (typeof gsap !== 'undefined') {
        gsap.to(iphone, {
          rotateY: x * 10,
          rotateX: -y * 8,
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
        gsap.to(iphone, {
          rotateY: 0,
          rotateX: 0,
          duration: 1.0,
          ease: 'power2.out'
        });
      }
    });
  }
}

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
  const statsContainer = document.querySelector('.hero-stats-bar');
  if (statsContainer && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounters();
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });
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

    // Kinescope CDN poster URL (fetches in ~50-100ms, provides instant dark cinematic cover)
    const posterUrl = `https://kinescope.io/${video.id}/poster.jpg`;

    card.innerHTML = `
      <div class="video-ratio-box ${catData.type}">
        <!-- 1. Real Cinematic Video Poster (Guarantees deep black & photo cover, never white) -->
        <img 
          class="video-native-poster" 
          src="${posterUrl}" 
          alt="${video.title || 'Evsevyev prod.'}" 
          loading="eager" 
          decoding="async"
          onerror="this.style.opacity='0'"
        >

        <!-- 2. Minimalist Video Loader: Play Button & Golden Progress Bar Only -->
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

        <!-- 3. Kinescope Native Preview Player (With sound icon & auto-loop) -->
        <iframe 
          src="https://kinescope.io/${video.id}" 
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;" 
          frameborder="0" 
          allowfullscreen 
          loading="eager"
          allowtransparency="true"
          style="background-color: #000000 !important;">
        </iframe>
      </div>
    `;

    const loader = card.querySelector('.video-loader');
    const loaderLine = card.querySelector('.loader-line');
    const iframe = card.querySelector('iframe');

    // 1. Uniform synchronous progress bar (2.4s) for all cards simultaneously
    requestAnimationFrame(() => {
      setTimeout(() => {
        if (loaderLine) {
          loaderLine.style.width = '100%';
        }
      }, 40);
    });

    // 2. Uniform loader fadeout at 2.4s for ALL cards simultaneously
    // When loader fades out, the user sees the crisp photographic poster still (never white!)
    setTimeout(() => {
      if (loader) {
        loader.classList.add('loaded');
      }
    }, 2400);

    // 3. Smooth crossfade into active playing video with sound toggle
    // Row 1 (cards 0-3) reveal at 2.5s
    // Row 2 (cards 4-7) reveal at 3.1s after chunks initialize over poster
    const iframeRevealDelay = index < 4 ? 2500 : 3100;
    setTimeout(() => {
      if (iframe) {
        iframe.classList.add('is-ready');
      }
    }, iframeRevealDelay);

    // Clean up loader element from DOM after transition completes
    setTimeout(() => {
      if (loader && loader.parentNode) {
        loader.remove();
      }
    }, 3200);

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
