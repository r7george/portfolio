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

