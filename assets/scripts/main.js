const getHamburgerMenu = () => {
  let nav = document.getElementById("nav-links-mobile");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  }
  else {
    nav.style.display = "flex";
  }
}


document.querySelector("#hangmanPreview").addEventListener("click", () => {
  window.location = `https://r7george.github.io/hangman/`;
});

document.querySelector("#hangmanRepo").addEventListener("click", () => {
  window.location = `https://github.com/r7george/hangman`;
});


document.querySelector("#calculatorPreview").addEventListener("click", () => {
  window.location = `https://r7george.github.io/calculator/`;
});

document.querySelector("#calculatorRepo").addEventListener("click", () => {
  window.location = `https://github.com/r7george/calculator`;
});