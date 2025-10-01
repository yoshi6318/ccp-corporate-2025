(() => {
  // burger menu
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelectorAll(".nav-links li a");

  function openMenu() {
    gsap.to(".line1", 0.5, { rotate: "45", y: 11 });
    gsap.to(".line2", 0.5, { rotate: "-45", y: 0 });
    gsap.to(".line3", 0.5, { opacity: 0 });
    gsap.to(".sm-nav", 1, { clipPath: "circle(2500px at 100% -10%)" });
  }

  function closeMenu() {
    gsap.to(".line1", 0.5, { rotate: "0", y: 0 });
    gsap.to(".line2", 0.5, { rotate: "0", y: 0 });
    gsap.to(".line3", 0.5, { opacity: 1 });
    gsap.to(".sm-nav", 1, { clipPath: "circle(50px at 100% -10%)" });
  }

  function navToggle() {
    if (!burger) return;
    const isActive = burger.classList.contains("active");
    burger.classList.toggle("active", !isActive);
    if (!isActive) openMenu();
    else closeMenu();
  }

  function navToggleLink() {
    if (!burger) return;
    burger.classList.remove("active");
    closeMenu();
  }

  if (burger) {
    burger.addEventListener("click", navToggle);
  }
  if (navLinks && navLinks.length) {
    navLinks.forEach((link) => {
      link.addEventListener("click", navToggleLink);
    });
  }

  // cursor (rAF + CSS variables for transform)
  const mouseCursor = document.querySelector(".cursor");
  const mouseCursor2 = document.querySelector(".cursor2");
  const links = document.querySelectorAll(".link");
  let mx = 0, my = 0, rafId = null;
  // Always keep OS cursor visible for stability
  document.body.style.cursor = '';

  function updateMouse() {
    if (mouseCursor) {
      mouseCursor.style.setProperty("--x", mx + "px");
      mouseCursor.style.setProperty("--y", my + "px");
    }
    if (mouseCursor2) {
      mouseCursor2.style.setProperty("--x", mx + "px");
      mouseCursor2.style.setProperty("--y", my + "px");
    }
    rafId = null;
  }

  window.addEventListener("mousemove", (e) => {
    // update variables regardless; custom cursor will only be visible on desktop
    mx = e.clientX;
    my = e.clientY;
    if (rafId === null) rafId = requestAnimationFrame(updateMouse);
    // Do not hide OS cursor anymore
  }, { passive: true });

  if (links && links.length && mouseCursor) {
    links.forEach((link) => {
      link.addEventListener("mouseover", () => {
        mouseCursor.style.opacity = 0.1;
        mouseCursor.style.setProperty("--s", 2);
      });
      link.addEventListener("mouseleave", () => {
        mouseCursor.style.opacity = 1;
        mouseCursor.style.setProperty("--s", 1);
      });
    });
  }

  // スムーススクロール
  const smoothScrollTrigger = document.querySelectorAll("a[href^=\"#\"]");
  if (smoothScrollTrigger && smoothScrollTrigger.length) {
    for (let i = 0; i < smoothScrollTrigger.length; i++) {
      smoothScrollTrigger[i].addEventListener("click", (e) => {
        const href = smoothScrollTrigger[i].getAttribute("href");
        if (!href) return;
        const targetElement = document.getElementById(href.replace("#", ""));
        if (!targetElement) return;
        e.preventDefault();
        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const gap = innerWidth < 767 ? 0 : 100;
        const target = rect + offset - gap;
        window.scrollTo({ top: target, behavior: "smooth" });
      });
    }
  }

  // マウスに応じてターゲットが動く
  const parallaxTargets = document.querySelectorAll(".mousemove-target");
  let pmx = 0, pmy = 0, pRafId = null;
  let parallaxEnabled = false;
  // Allow index page to enable when copy is visible
  window.addEventListener('enableParallax', () => { parallaxEnabled = true; });
  function parallaxTick() {
    if (!parallaxEnabled) { pRafId = null; return; }
    parallaxTargets.forEach((layer) => {
      const speed = Number(layer.getAttribute("data-speed")) || 0;
      const x = (window.innerWidth - pmx * speed) / 1000;
      const y = (window.innerHeight - pmy * speed) / 1000;
      layer.style.transform = `translate3d(${x}%, ${y}%, 0)`;
    });
    pRafId = null;
  }
  window.addEventListener("mousemove", (e) => {
    if (!parallaxEnabled) return;
    pmx = e.clientX;
    pmy = e.clientY;
    if (pRafId === null) pRafId = requestAnimationFrame(parallaxTick);
  }, { passive: true });

  // page transition
  const pageTransition = document.querySelector(".page-transition");
  const linkTransition = document.querySelectorAll(".link-transition");
  if (pageTransition && linkTransition && linkTransition.length) {
    linkTransition.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        gsap.to(".cover", {
          duration: 0.8,
          left: 0,
          stagger: 0.4,
          ease: "Sine.inOut",
        });
        setTimeout(() => {
          window.location = link.href;
        }, 1600);
      });
    });
  }
})();
