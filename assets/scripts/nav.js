const menu = document.querySelector(".nav__menu-hamburger");
const menuItem = document.querySelectorAll(".nav__item");
const hamburger = document.querySelector(".nav__hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

// hamburger menu clicking code
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
// closes the menu after one of the links has been clicked
menuItems.forEach((item) => {
  item.addEventListener("click", handleMenuClick);
});


// used for changing the shape of the hamburger icon on scroll
let hasScrolled = false;
const toggleHasScrolled = () => {
  if (window.scrollY == 0) {
    hasScrolled = false;
  } else {
    hasScrolled = true;
  }
  return hasScrolled;
}

const handleScrollHamburgerStyling = () => {
  if(hasScrolled) {
    hamburger.style.backgroundColor = "#E59C23";
    hamburger.style.borderRadius = "50%";
    hamburger.style.padding = "12px 15px";
    menuIcon.style.color = "#142430";
  } else if (window.scrollY == 0) {
    hasScrolled = false;
    hamburger.style.backgroundColor = "transparent";
    hamburger.style.borderRadius = "0";
    hamburger.style.padding = "10px";
    menuIcon.style.color = "#E59C23";
  }
}

window.addEventListener("scroll", toggleHasScrolled);
window.addEventListener("scroll", handleScrollHamburgerStyling);

const navBar = document.querySelector(".nav__menu");
const navLinks = document.querySelectorAll(".nav__item");

const handleScrollNavBarStyling = () => {
  if(hasScrolled) {
    navBar.style.borderRadius = "40px";
    navBar.style.backgroundColor = "#E59C23";
    navLinks.forEach((link) => {
      link.style.color = "#142430";
    });
  } else if (window.scrollY == 0) {
    hasScrolled = false;
    navBar.style.borderRadius = "0";
    navBar.style.backgroundColor = "#142430";
    navLinks.forEach((link) => {
      link.style.color = "#E6F4F1";
    });
  }
}

window.addEventListener("scroll", handleScrollNavBarStyling);