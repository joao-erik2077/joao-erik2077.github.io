const helloWorldContainer = document.getElementById("hello-world-ctn");
const infoContainer = document.getElementById("info-ctn");

helloWorldContainer.addEventListener("click", () => {
  helloWorldContainer.style.border = "1px solid #00ff00";
  helloWorldContainer.style.padding = "16px";
  helloWorldContainer.style.color = "#00ff00";
  changeAnimation(helloWorldContainer, infoContainer);
});

const changeAnimation = (previous, next) => {
  previous.style.opacity = "0";
  next.style.visibility = "visible";

  setTimeout(() => {
    previous.style.display = "none";
    next.style.display = "flex";
    next.style.opacity = "1";
  }, 1000);
};
