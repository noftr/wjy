gsap.registerPlugin(ScrollTrigger);

let scrollerPage = ".scroll-wrapper";

if (document.documentElement.clientWidth < 480) {
  console.log("Ержан вставай");
  scrollerPage = document.querySelector("html");
  console.log(scrollerPage);
}

// ПОЛОСКА

const sliderProgressLine = gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger__slide-is1",
    scroller: scrollerPage,
    start: "top center",
    end: "bottom center",
    scrub: true,
    // markers: true,
  },
});

const sliderProgressLine2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger__slide-is2",
    scroller: scrollerPage,
    start: "top center",
    end: "bottom center",
    scrub: true,
    // markers: true,
  },
});

const sliderProgressLine3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger__slide-is3",
    scroller: scrollerPage,
    start: "top center",
    end: "bottom center",
    scrub: true,
    // markers: true,
  },
});

sliderProgressLine.to(".data-sticky .slider-nav__line-progress", { x: "0%" });
sliderProgressLine2
  .to(".data-sticky .slider-nav__line-progress", {
    x: "-100%",
    delay: 0,
    duration: 0,
  })
  .to(".data-sticky .slider-nav__line-progress", { x: "0%" });

sliderProgressLine3
  .to(".data-sticky .slider-nav__line-progress", {
    x: "-100%",
    delay: 0,
    duration: 0,
  })
  .to(".data-sticky .slider-nav__line-progress", { x: "0%" });

// ТАЙМЛАЙН 1

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger__slide-is1",
    scroller: scrollerPage,
    start: "top center",
    end: "bottom center",
    toggleActions: "play reverse play reverse",
    // markers: true,
  },
});

tl.to(".slider__is1", { opacity: "1", delay: 0.35, ease: "ease" }, "<")
  .to(".slide_is1-heading", { x: "3vw" }, "<")
  .to("#slide-1--anim-2", { x: "-2vw" }, "<")
  .to(".slider-heading_first.is1", { opacity: "1" }, "<");

// ТАЙМЛАЙН 2

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger__slide-is2",
    scroller: scrollerPage,
    start: "top center",
    end: "bottom center",
    // markers: true,
    toggleActions: "play reverse play reverse",
  },
});

tl2
  .to(".slider__is2", { opacity: "1", delay: 0.35, ease: "ease" })
  .to("#slide-2--anim-1", { x: "2vw" }, "<")
  .to("#slide-2--anim-2", { x: "-3vw" }, "<")
  .to("#slide-2--anim-3", { x: "2vw" }, "<")
  .to(".slider-heading_first.is2", { opacity: "1" }, "<");

// ТАЙМЛАЙН 3

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger__slide-is3",
    scroller: scrollerPage,
    start: "top center",
    end: "bottom center",
    // markers: true,
    toggleActions: "play play play reverse",
  },
});

tl3
  .to(".slider__is3", { opacity: "1", delay: 0.35, ease: "ease" })
  .to("#slide-3--anim-1", { x: "2vw" }, "<")
  .to("#slide-3--anim-2", { x: "-3vw" }, "<")
  .to(".slider-heading_first.is3", { opacity: "1" }, "<");

// АНИМАЦИЯ СЛАЙДА МОБАЙЛ

const slideMobileHeading = gsap.timeline({
  scrollTrigger: {
    trigger: ".featured__triggers-is1",
    scroller: scrollerPage,
    start: "top center",
    end: "bottom center",
    scrub: true,
    // markers: true,
  },
});

slideMobileHeading.to("#featured-head-is1", {
  "letter-spacing": "0em",
});

const slideMobile = gsap.timeline({
  scrollTrigger: {
    trigger: ".featured__triggers-is1",
    scroller: scrollerPage,
    start: "top center",
    end: "bottom center",
    // markers: true,
    toggleActions: "play reverse play reverse",
  },
});

slideMobile
  .to(".featured__slide-is1", {
    opacity: "1",
    delay: 0.35,
    ease: "ease",
  })
  .to(".slider-nav-featured .slider-heading_first.is1", { opacity: "1" }, "<")
  .to(".featured__image-is1", { opacity: "1" }, "<");

// АНИМАЦИЯ СЛАЙДА ВЕБСАЙТ

const slideWebsiteHeading = gsap.timeline({
  scrollTrigger: {
    trigger: ".featured__triggers-is2",
    scroller: scrollerPage,
    start: "top center",
    end: "bottom center",
    scrub: true,
    // markers: true,
  },
});

slideWebsiteHeading.to("#featured-head-is2", {
  "letter-spacing": "0.3em",
});

const slideWebsite = gsap.timeline({
  scrollTrigger: {
    trigger: ".featured__triggers-is2",
    scroller: scrollerPage,
    start: "top center",
    end: "bottom center",
    // markers: true,
    toggleActions: "play play play reverse",
  },
});

slideWebsite
  .to(".featured__slide-is2", {
    opacity: "1",
    delay: 0.35,
    ease: "ease",
  })
  .to(".slider-nav-featured .slider-heading_first.is2", { opacity: "1" }, "<")
  .to(".featured__image-is3", { opacity: "1" }, "<")
  .to(".featured__image-is2", { opacity: "1" }, "<");

// АНИМАЦИЯ НАВИГАЦИИ СЛАЙДА ВЕБСАЙТ И МОБАЙЛ

const featuredProgressLine = gsap.timeline({
  scrollTrigger: {
    trigger: ".featured__triggers-is1",
    scroller: scrollerPage,
    start: "top center",
    end: "bottom center",
    scrub: true,
    // markers: true,
  },
});

const featuredProgressLine2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".featured__triggers-is2",
    scroller: scrollerPage,
    start: "top center",
    end: "bottom center",
    scrub: true,
    // markers: true,
  },
});

featuredProgressLine.to(".slider-nav-featured .slider-nav__line-progress", {
  x: "0%",
});
featuredProgressLine2
  .to(".slider-nav-featured .slider-nav__line-progress", {
    x: "-100%",
    delay: 0,
    duration: 0,
  })
  .to(".slider-nav-featured .slider-nav__line-progress", { x: "0%" });
