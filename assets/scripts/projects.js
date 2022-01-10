const left = document.querySelector("#left");
const right = document.querySelector("#right");
const projects = document.querySelectorAll(".project");

console.log(projects);

let counter = 0;

const handleLeftClick = () => {
  if(counter > 0) {
    counter -= 1;
  } else {
    counter = 3;
  }
}

const handleRightClick = () => {
  if(counter < 3) {
    counter += 1;
  } else {
    counter = 0;
  }
}

const handleClickProjects = () => {
  if(counter == 0) {
    projects[0].style.display = "flex";
    projects[1].style.display = "none";
    projects[projects.length - 1].style.display = "none";
  } else if (counter == 1) {
    projects[1].style.display = "flex";
    projects[2].style.display = "none";
    projects[0].style.display = "none";
  } else if (counter == 2) {
    projects[2].style.display = "flex";
    projects[3].style.display = "none";
    projects[1].style.display = "none";
  } else if (counter == 3) {
    projects[3].style.display = "flex";
    projects[2].style.display = "none";
    projects[0].style.display = "none";
  }
}

left.addEventListener("click", handleLeftClick);
left.addEventListener("click", handleClickProjects);
right.addEventListener("click", handleRightClick);
right.addEventListener("click", handleClickProjects);


const previewBtns = document.querySelectorAll(".project__preview");
const repoBtns = document.querySelectorAll(".project__github");

previewBtns[0].addEventListener("click", () => {
  window.open("https://r7george.github.io/hangman/", "_blank");
});
repoBtns[0].addEventListener("click", () => {
  window.open("https://github.com/r7george/hangman", "_blank");
});

previewBtns[1].addEventListener("click", () => {
  window.open("https://r7george.github.io/calculator/", "_blank");
});
repoBtns[1].addEventListener("click", () => {
  window.open("https://github.com/r7george/calculator", "_blank");
});

previewBtns[2].addEventListener("click", () => {
  window.open("https://r7george.github.io/morse-translator/", "_blank");
});
repoBtns[2].addEventListener("click", () => {
  window.open("https://github.com/r7george/morse-translator", "_blank");
});

previewBtns[3].addEventListener("click", () => {
  window.open("https://r7george.github.io/ticket-tracker/", "_blank");
});
repoBtns[3].addEventListener("click", () => {
  window.open("https://github.com/r7george/ticket-tracker", "_blank");
});