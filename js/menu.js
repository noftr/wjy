// ВЫЕЗЖАЮЩЕЕ МЕНЮ

const navBtnOpen = document.getElementById("nav-burger"); // кнопка бюргер в меню
const mainContentArea = document.getElementById("scrollview"); // главное окно с контентом
const navMenuList = document.getElementById("navigation"); // выезжающая навигация по сайту
const returnMainArea = document.getElementById("open-scroll");

navBtnOpen.addEventListener("click", function () {
  mainContentArea.classList.add("scroll-view--menu-open");
  navMenuList.classList.add("menu--menu-open");
  document.querySelector("html").classList.remove("has-scroll-scrolling"); // удаляем класс со стилями скролла locomotive
  mainContentArea.style.overflow = "hidden";
  returnMainArea.classList.add("open-scroll--menu-open");
  show();
});

returnMainArea.addEventListener("click", function () {
  mainContentArea.classList.remove("scroll-view--menu-open");
  navMenuList.classList.remove("menu--menu-open");
  returnMainArea.classList.remove("open-scroll--menu-open");
  setTimeout(showHide, 500);
});

// ДЕЛАЕМ ВЫСОТУ 100vh а второй обратно авто

function show() {
  mainContentArea.style.height = "100vh";
}

function showHide() {
  mainContentArea.style.height = "auto";
  mainContentArea.style.overflow = "visible";
}
