function getHamburgerMenu() {
  let nav = document.getElementById("nav-links-mobile");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  }
  else {
    nav.style.display = "flex";
  }
}

