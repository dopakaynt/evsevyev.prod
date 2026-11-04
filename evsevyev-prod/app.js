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
  initIPhoneShowcase();
  initHeroStatsInteractions();
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
   MODULE 2: Three.js Photorealistic Interstellar Space
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

  // Lighting
  const ambientLight = new THREE.AmbientLight(0x1a1d2e, 0.8);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xfffaed, 2.2);
  keyLight.position.set(18, 12, 14);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.9);
  rimLight.position.set(-18, -10, -8);
  scene.add(rimLight);

  // 1. Deep Space Multi-Spectral Starfield (3,200 stars)
  const starCount = 3200;
  const starGeom = new THREE.BufferGeometry();
  const starPositions = new Float32Array(starCount * 3);
  const starColors = new Float32Array(starCount * 3);

  const colorWhite = new THREE.Color(0xffffff);
  const colorGold = new THREE.Color(0xffe082);
  const colorBlue = new THREE.Color(0x90caf9);
  const colorCyan = new THREE.Color(0x80deea);

  for (let i = 0; i < starCount * 3; i += 3) {
    starPositions[i] = (Math.random() - 0.5) * 120;
    starPositions[i + 1] = (Math.random() - 0.5) * 100;
    starPositions[i + 2] = (Math.random() - 0.5) * 120;

    const rnd = Math.random();
    let col = colorWhite;
    if (rnd < 0.22) col = colorGold;
    else if (rnd < 0.48) col = colorBlue;
    else if (rnd < 0.62) col = colorCyan;

    starColors[i] = col.r;
    starColors[i + 1] = col.g;
    starColors[i + 2] = col.b;
  }

  starGeom.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  starGeom.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

  const starMat = new THREE.PointsMaterial({
    size: 0.042,
    vertexColors: true,
    transparent: true,
    opacity: 0.88,
    blending: THREE.AdditiveBlending
  });
  const starfield = new THREE.Points(starGeom, starMat);
  scene.add(starfield);

  // 2. Majestic Dark Eclipse Exoplanet with Royal Blue Atmosphere & Planetary Ring
  const planetGroup = new THREE.Group();
  planetGroup.position.set(13, 3, -16);
  planetGroup.rotation.x = 0.38;
  planetGroup.rotation.z = -0.22;

  // Planet body (high contrast obsidian sphere)
  const planetGeom = new THREE.SphereGeometry(3.6, 64, 64);
  const planetMat = new THREE.MeshStandardMaterial({
    color: 0x0a0c14,
    roughness: 0.7,
    metalness: 0.2
  });
  const planetMesh = new THREE.Mesh(planetGeom, planetMat);
  planetGroup.add(planetMesh);

  // Soft atmospheric rim
  const atmoGeom = new THREE.SphereGeometry(3.72, 48, 48);
  const atmoMat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.14,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending
  });
  const atmoMesh = new THREE.Mesh(atmoGeom, atmoMat);
  planetGroup.add(atmoMesh);

  // Planetary Ring (like Saturn / Interstellar Gargantua disk)
  const ringGeom = new THREE.RingGeometry(4.4, 7.2, 64);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x64748b,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.18,
    blending: THREE.AdditiveBlending
  });
  const ringMesh = new THREE.Mesh(ringGeom, ringMat);
  ringMesh.rotation.x = Math.PI / 2 + 0.2;
  planetGroup.add(ringMesh);

  scene.add(planetGroup);

  // 4. Periodic Shooting Meteor Streaks
  const meteorGeom = new THREE.BufferGeometry();
  const meteorPositions = new Float32Array(6); // 2 points = 1 line segment
  meteorGeom.setAttribute('position', new THREE.BufferAttribute(meteorPositions, 3));

  const meteorMat = new THREE.LineBasicMaterial({
    color: 0xffffff,
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
  });

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

    planetGroup.rotation.y = elapsed * 0.02 + targetX * 0.2;
    planetGroup.position.y = 3 + Math.sin(elapsed * 0.4) * 0.3;

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
   MODULE 3: Interactive Dual-Phone Battle Showcase
   (Competitor vs Evsevyev prod. with Dynamic Live Metrics)
   ========================================================= */
/* =========================================================
   MODULE 3: Interactive Authentic Instagram Reels Showcase
   (Active Rapid Metrics Growth, Heart Bursts & Parallax)
   ========================================================= */
function initIPhoneShowcase() {
  const iphone = document.getElementById('iphone3D');
  const competitor = document.getElementById('phoneCompetitor');
  const heroSection = document.getElementById('hero');
  const liveTime = document.getElementById('iosLiveTime');
  const glare = document.querySelector('.screen-specular-glare');
  const likeBtn = document.getElementById('heroLikeBtn');
  const heartWrap = document.getElementById('heroHeartWrap');
  const heartsContainer = document.getElementById('floatingHeartsContainer');
  const liveLikes = document.getElementById('heroLiveLikes');
  const liveViews = document.getElementById('heroLiveViews');
  const screenContainer = document.getElementById('heroScreenContainer');
  const bigHeart = document.getElementById('instagramBigHeart');
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

  // 2. Hide poster once iframe loads video
  if (reelIframe && reelPoster) {
    reelIframe.addEventListener('load', () => {
      setTimeout(() => {
        reelPoster.style.opacity = '0';
      }, 1200);
    });
  }

  // 3. Floating Heart Spawner Engine
  const heartIcons = ['❤️', '🔥', '💖', '✨', '⚡', '❤️'];
  function spawnFloatingHeart(iconOverride) {
    if (!heartsContainer) return;
    const heart = document.createElement('span');
    heart.className = 'mini-float-heart';
    heart.textContent = iconOverride || heartIcons[Math.floor(Math.random() * heartIcons.length)];
    
    // Subtle horizontal drift
    const driftX = (Math.random() - 0.5) * 36;
    heart.style.setProperty('--drift-x', `${driftX}px`);
    heart.style.fontSize = `${14 + Math.random() * 8}px`;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      if (heart.parentNode) {
        heart.parentNode.removeChild(heart);
      }
    }, 2200);
  }

  // Auto-stream floating hearts like on live viral Reels
  setInterval(() => {
    if (document.hidden) return;
    spawnFloatingHeart();
  }, 1800);

  // 4. ACTIVE LIVE NUMBERS RAPID GROWTH («Накрутка на глазах»)
  let currentViews = 1842500;
  let currentLikes = 142400;

  function formatSpaces(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function formatK(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  }

  // Fast-paced views ticker (updates every 450ms, visually climbing rapidly)
  setInterval(() => {
    if (document.hidden) return;
    currentViews += Math.floor(65 + Math.random() * 190);
    if (liveViews) {
      liveViews.textContent = formatSpaces(currentViews);
    }
  }, 450);

  // Periodic likes ticker (updates every 1.6s)
  setInterval(() => {
    if (document.hidden) return;
    currentLikes += Math.floor(1 + Math.random() * 2);
    if (liveLikes) {
      liveLikes.textContent = formatK(currentLikes);
    }
  }, 1600);

  // 5. Instagram Double-Tap Pop Heart & Interactive Like Burst
  function triggerLikeAction() {
    // Pop big Instagram heart in center
    if (bigHeart && typeof gsap !== 'undefined') {
      gsap.fromTo(bigHeart,
        { scale: 0, opacity: 0.95, rotate: -12 },
        { scale: 1.25, opacity: 1, rotate: 0, duration: 0.25, ease: 'back.out(2.5)', onComplete: () => {
          gsap.to(bigHeart, { scale: 0.9, opacity: 0, duration: 0.35, delay: 0.25 });
        }}
      );
    }

    // Like button heart bounce
    if (heartWrap && typeof gsap !== 'undefined') {
      gsap.fromTo(heartWrap,
        { scale: 0.7 },
        { scale: 1.45, duration: 0.2, yoyo: true, repeat: 1, ease: 'back.out(3)' }
      );
    }

    currentLikes += 100;
    if (liveLikes) {
      liveLikes.textContent = formatK(currentLikes);
    }

    // Burst 5 floating hearts
    for (let i = 0; i < 5; i++) {
      setTimeout(() => spawnFloatingHeart('❤️'), i * 80);
    }
  }

  if (likeBtn) {
    likeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      triggerLikeAction();
    });
  }

  if (screenContainer) {
    let lastTap = 0;
    screenContainer.addEventListener('click', () => {
      const now = Date.now();
      if (now - lastTap < 400) {
        triggerLikeAction();
      }
      lastTap = now;
    });
  }

  // 6. Organic Idle Floating Hover (Both Phones in perspective)
  if (typeof gsap !== 'undefined') {
    if (iphone) {
      gsap.to(iphone, {
        y: '+=8',
        duration: 3.4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      });
    }
    if (competitor) {
      gsap.to(competitor, {
        y: '-=6',
        duration: 4.0,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.5
      });
    }
  }

  // 7. 3D Scroll-Triggered Flight & Perspective Movement
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && heroSection) {
    gsap.registerPlugin(ScrollTrigger);

    if (iphone) {
      gsap.to(iphone, {
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2
        },
        y: 180,
        x: -35,
        rotateY: -18,
        rotateX: 12,
        scale: 0.94,
        transformPerspective: 1400,
        ease: 'power1.out'
      });
    }

    if (competitor) {
      gsap.to(competitor, {
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5
        },
        y: 120,
        x: 20,
        rotateY: 24,
        rotateX: 8,
        scale: 0.78,
        opacity: 0.45,
        transformPerspective: 1400,
        ease: 'power1.out'
      });
    }
  }

  // 8. Interactive 3D Parallax Tilt on Mouse Move
  if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      if (typeof gsap !== 'undefined') {
        if (iphone) {
          gsap.to(iphone, {
            rotateY: -6 + x * 16,
            rotateX: -y * 12,
            duration: 0.6,
            ease: 'power2.out',
            transformPerspective: 1400
          });
        }

        if (competitor) {
          gsap.to(competitor, {
            rotateY: 18 + x * 10,
            rotateX: 4 - y * 8,
            duration: 0.75,
            ease: 'power2.out',
            transformPerspective: 1400
          });
        }

        if (glare) {
          const glareX = 50 + x * 60;
          const glareY = 50 + y * 60;
          glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.18) 0%, transparent 60%)`;
        }
      }
    });

    heroSection.addEventListener('mouseleave', () => {
      if (typeof gsap !== 'undefined') {
        if (iphone) {
          gsap.to(iphone, {
            rotateY: -6,
            rotateX: 0,
            duration: 1.2,
            ease: 'elastic.out(1, 0.4)'
          });
        }
        if (competitor) {
          gsap.to(competitor, {
            rotateY: 18,
            rotateX: 4,
            duration: 1.2,
            ease: 'elastic.out(1, 0.4)'
          });
        }
      }
    });
  }
}

/* =========================================================
   MODULE 3.5: Interactive Hero Stats Micro-Widgets
   (Live Odometer, Cases Folder Animation, 4-Hour Dial)
   ========================================================= */
function initHeroStatsInteractions() {
  const odometerElem = document.getElementById('odometerDigits');
  const statOdometer = document.getElementById('statOdometer');
  const statFolder = document.getElementById('statFolder');
  const clockHourHand = document.getElementById('clockHourHand');
  const clockMinHand = document.getElementById('clockMinHand');

  // 1. Live Odometer: 50M+ Views
  let totalViews = 50482190;
  let odoSpeed = 320;

  function formatSpaces(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function tickOdometer() {
    if (!document.hidden && odometerElem) {
      totalViews += Math.floor(14 + Math.random() * 32);
      odometerElem.textContent = formatSpaces(totalViews) + '+';
    }
    setTimeout(tickOdometer, odoSpeed);
  }
  tickOdometer();

  if (statOdometer) {
    statOdometer.addEventListener('mouseenter', () => {
      odoSpeed = 90; // Speed boost on hover!
    });
    statOdometer.addEventListener('mouseleave', () => {
      odoSpeed = 320;
    });
  }

  // 2. Cases Folder Animation: 60+ Cases
  if (statFolder && typeof gsap !== 'undefined') {
    const sheets = statFolder.querySelectorAll('.folder-sheet');
    statFolder.addEventListener('mouseenter', () => {
      if (sheets[0]) gsap.to(sheets[0], { y: -10, scale: 0.98, duration: 0.3, ease: 'back.out(2)' });
      if (sheets[1]) gsap.to(sheets[1], { y: -14, rotate: -5, duration: 0.35, ease: 'back.out(2)' });
    });
    statFolder.addEventListener('mouseleave', () => {
      if (sheets[0]) gsap.to(sheets[0], { y: 0, scale: 0.92, duration: 0.4, ease: 'power2.out' });
      if (sheets[1]) gsap.to(sheets[1], { y: 0, rotate: 0, duration: 0.4, ease: 'power2.out' });
    });
  }

  // 3. Clock Dial: 4 Hours of Client Time per Month
  let minuteAngle = 0;
  let hourAngle = 0; // Sweeps from 0 deg (12:00) to 120 deg (04:00)
  let hourDirection = 1;

  setInterval(() => {
    if (document.hidden) return;
    minuteAngle = (minuteAngle + 6) % 360;
    if (clockMinHand) {
      clockMinHand.style.transform = `rotate(${minuteAngle}deg)`;
      clockMinHand.style.transformOrigin = '18px 18px';
    }

    // Hour hand smoothly oscillates / sweeps through the 4-hour zone (0..120 degrees)
    hourAngle += 0.8 * hourDirection;
    if (hourAngle >= 120) {
      hourDirection = -1;
    } else if (hourAngle <= 0) {
      hourDirection = 1;
    }

    if (clockHourHand) {
      clockHourHand.style.transform = `rotate(${hourAngle}deg)`;
      clockHourHand.style.transformOrigin = '18px 18px';
    }
  }, 100);
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
