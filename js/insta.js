// АНИМАЦИЯ ИНСТА КАРТОЧЕК В ФУТЕРЕ

locomotiveScroll.on("call", (func) => {
  switch (func) {
    case "animation": {
      animSocial();
      setTimeout(animSocial2, 100);
      setTimeout(animSocial3, 150);
      setTimeout(animSocial4, 200);
      setTimeout(animSocial5, 250);
      setTimeout(animSocial6, 300);
    }
  }
});

let socialItem = document.getElementsByClassName("social__item");
let socialHeading = document.getElementById("social__item");
let headingSocial = document.getElementsByClassName("social__heading");

function animSocial() {
  socialItem[0].classList.toggle("social__item--anim");
  headingSocial.classList.toggle("social__heading--anim");
}
function animSocial2() {
  socialItem[1].classList.toggle("social__item--anim");
}
function animSocial3() {
  socialItem[2].classList.toggle("social__item--anim");
}
function animSocial4() {
  socialItem[3].classList.toggle("social__item--anim");
}
function animSocial5() {
  socialItem[4].classList.toggle("social__item--anim");
}

function animSocial6() {
  socialItem[5].classList.toggle("social__item--anim");
}

// --АНИМАЦИЯ ИНСТА КАРТОЧЕК В ФУТЕРЕ
