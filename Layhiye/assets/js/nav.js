const shopping_number_nav = document.querySelector(".shopping-number")
const wishlist_number_nav = document.querySelector(".heart-number")
// basketArr = JSON.parse(localStorage.getItem("basket"));
// wishlistArr = JSON.parse(localStorage.getItem("wishlist"));
// shopping_number_nav.innerHTML=basketArr.length
// wishlist_number_nav.innerHTML=wishlistArr.length
window.onload = function () {
    if (localStorage.getItem("basket") !== null) {
      basketArr = JSON.parse(localStorage.getItem("basket"));
      shopping_number_nav.innerText=basketArr.length
      
    }
    if (localStorage.getItem("wishlist") !== null) {
      wishlistArr = JSON.parse(localStorage.getItem("wishlist"));
      wishlist_number_nav.innerHTML=wishlistArr.length
    }
   
  };
window.addEventListener("scroll",function(){
    const nav=this.document.querySelector("nav")
    nav.classList.toggle("sticky",window.scrollY>0)
})