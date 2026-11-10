# Evsevyev Prod — Creative & Boutique Web Standards

## 1. Creative Art Direction & Luxury Aesthetic (A24 / Linear / Apple Pro Tier)
* **Visual Tone**: High-end boutique video production studio. Dark luxury atmosphere with cinematic lighting and deep contrast.
* **Palette**:
  * Deep cosmic background: `#060709` / `#0a0b0f`
  * Glass surface cards: `rgba(14, 16, 22, 0.72)` with `backdrop-filter: blur(20px)` and `1px solid rgba(255, 255, 255, 0.08)`
  * Accent yellow/amber: `#fee500` / `#eab308` for prestige focus and highlights
  * Live status accents: `#22c55e` (emerald pulse) and `#ef4444` (REC indicator)
* **Strict Anti-Cliché Standards**:
  * NEVER use cheap cartoonish 3D exoplanets, flying asteroids, or low-poly cliparts.
  * NEVER use generic phone mockups with fake battery/wifi/5G status bars or fake dynamic islands. Use bespoke Director's Cinema Canvases or viewport frames.
  * NEVER leave massive empty dead zones (150-250px) between sections. Section flow must feel coherent, continuous, and intentional.

## 2. Motion Design & Animation Choreography (60/120fps Silk Standard)
* **Smooth Scrolling (Lenis)**:
  * Lenis MUST run on a single RAF loop. When GSAP is active, delegate strictly to `gsap.ticker.add((time) => lenis.raf(time * 1000))` and `ScrollTrigger.update`. NEVER run native `requestAnimationFrame(raf)` simultaneously.
* **Easing & Physics**:
  * Use premium easing curves: `cubic-bezier(0.16, 1, 0.3, 1)` for snappy UI responses and `sine.inOut` for organic ambient floats.
  * Animate strictly GPU-accelerated properties (`transform`, `opacity`, `filter`). Avoid animating layout properties (`width`, `height`, `margin`, `top`).
* **Micro-Interactions**:
  * Every metric or card should have tactile feedback (hover glow, 3D tilt, audio wave acceleration, card deck fan-out).

## 3. Typography & Tabular Numerals (Zero-Jitter Rule)
* **No Number Jumping**: All counters and metrics MUST use `font-variant-numeric: tabular-nums;` and `font-feature-settings: "tnum" 1;`. Dynamic numbers must never shift the horizontal layout or twitch while counting up.
* **Fluid Typography**: Use `clamp()` for responsive titles and subtitles with tight letter-spacing (`letter-spacing: -0.02em` to `-0.03em`) on display headers.

## 4. Code & Architecture Discipline
* Ensure complete HTML/CSS/JS syntax validation before presenting changes.
* Preserve Three.js multi-spectral starfield and meteors; keep planet removed.
* Maintain Kinescope video player integrations with instant responsive poster crossfades and interactive sound toggles.
