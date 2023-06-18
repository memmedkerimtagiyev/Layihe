const hamburger = document.querySelector(".hamburger");
hamburger.onclick = () => hamburger.classList.toggle("is-active");
hamburger.onclick = () => mobileNavList.classList.toggle("dis-b");

const mobileNavList = document.querySelector(".mobile-nav-list");



const subMenu = document.querySelector(".sub-menu-mobile");
const down = document.querySelector(".down");


down.onclick = () => {
  subMenu.classList.toggle("sub-menu-open");
  console.log("salam");
};

