const hamburger = document.querySelector(".hamburger");
const mobileNavList = document.querySelector(".mobile-nav-list");

hamburger.onclick = () => {
  hamburger.classList.toggle("is-active");
  mobileNavList.classList.toggle("dis-b");
  console.log("salam")
};



const subMenu = document.querySelector(".sub-menu-mobile");
const down = document.querySelector(".down");
console.log(down);

down.onclick = () => {
  subMenu.classList.toggle("sub-menu-open");
  console.log("salam");
  down.classList.toggle("down-transition");
};
