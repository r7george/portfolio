const menu = document.querySelector(".nav__menu");
const menuItem = document.querySelectorAll(".nav__item");
const hamburger = document.querySelector(".nav__hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

const handleMenuClick = () => {
  if(menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", handleMenuClick);

const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item) => {
  item.addEventListener("click", handleMenuClick);
});