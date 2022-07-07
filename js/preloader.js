let fastList = document.getElementsByClassName("outline-text");
let preloaderHeadline = document.querySelector(".preloader__heading-list");

let preloaderTextHeading = document.querySelectorAll(".preloader__item");
let childTextHeading = preloaderTextHeading[0].querySelector("div");
let childTextHeading2 = preloaderTextHeading[1].querySelector("div");
let childTextHeading3 = preloaderTextHeading[2].querySelector("div");
let preloaderBlock = document.querySelector(".preloader__block");
let html = document.querySelector("html");

preloaderBlock.style.opacity = "1";
html.style.overflow = "hidden";

function fastAnim() {
  fastList[0].style.opacity = "1";
  setTimeout(function () {
    fastList[1].style.opacity = "1";
  }, 50);
  setTimeout(function () {
    fastList[2].style.opacity = "1";
  }, 100);
  setTimeout(function () {
    fastList[3].style.opacity = "1";
  }, 150);
  setTimeout(function () {
    fastList[4].style.opacity = "1";
  }, 200);
  setTimeout(function () {
    fastList[5].style.opacity = "1";
  }, 250);
  setTimeout(function () {
    fastList[6].style.opacity = "1";
  }, 300);
}

// АНИМАИЦЯ ЛЕВОЙ ЧАСТИ ПРЕЛОАДЕРА

animHeading();
function animHeading() {
  setTimeout(function () {
    preloaderHeadline.style.transform = "translateY(-0.8em)";
    childTextHeading2.style.display = "block";
    setTimeout(function () {
      childTextHeading.style.display = "none";
    }, 800);
  }, 2000);
  setTimeout(function () {
    preloaderHeadline.style.transform = "translateY(-1.6em)";
    setTimeout(function () {
      childTextHeading2.style.display = "none";
    }, 800);
  }, 4000);
  setTimeout(function () {
    preloaderHeadline.style.transform = "translateY(-2.4em)";
    setTimeout(function () {
      childTextHeading3.style.display = "none";
    }, 800);
  }, 6000);
}

// --АНИМАИЦЯ ЛЕВОЙ ЧАСТИ ПРЕЛОАДЕРА

function fastAnimEnd() {
  fastList[0].style.opacity = "0";
  setTimeout(function () {
    fastList[1].style.opacity = "0";
  }, 50);
  setTimeout(function () {
    fastList[2].style.opacity = "0";
  }, 100);
  setTimeout(function () {
    fastList[3].style.opacity = "0";
  }, 150);
  setTimeout(function () {
    fastList[4].style.opacity = "0";
  }, 200);
  setTimeout(function () {
    fastList[5].style.opacity = "0";
  }, 250);
  setTimeout(function () {
    fastList[6].style.opacity = "0";
  }, 300);
}

function animTest() {
  fastAnim();
  setTimeout(fastAnimEnd, 400);
}

animTest();

const animInterval = setInterval(function firstAnim() {
  animTest();
}, 1200);

// АНИМАЦИЯ ПРОГРЕСС БАРА

// variables
let customEase =
  "M0,0,C0,0,0.13,0.34,0.238,0.442,0.305,0.506,0.322,0.514,0.396,0.54,0.478,0.568,0.468,0.56,0.522,0.584,0.572,0.606,0.61,0.719,0.714,0.826,0.798,0.912,1,1,1,1";
let counter = {
  value: 0,
};
let loaderDuration = 7;

// If not a first time visit in this tab
if (sessionStorage.getItem("visited") !== null) {
  // loaderDuration = 0;
  counter = {
    value: 0,
  };
}
sessionStorage.setItem("visited", "true");

function updateLoaderText() {
  let progress = Math.round(counter.value);
  $(".number__progress").text(progress);
}
function endLoaderAnimation() {
  $(".prelaoder__trigger").click();
}

let tlPreloader = gsap.timeline({
  onComplete: endLoaderAnimation,
});
tlPreloader.to(counter, {
  value: 100,
  onUpdate: updateLoaderText,
  duration: loaderDuration,
  ease: CustomEase.create("custom", customEase),
});

// АНИМАЦИЯ ПРОГРЕСС БАРА

// КОНЕЦ ПРЕЛОАДЕРА

setTimeout(function () {
  html.style.overflow = "visible";
  clearInterval(animInterval);
}, 6000);

// --КОНЕЦ ПРЕЛОАДЕРА
