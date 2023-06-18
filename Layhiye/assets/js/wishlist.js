const productAllCart = document.querySelector(".productAllCart");
let wishlistArr = [];
wishlistArr = JSON.parse(localStorage.getItem("wishlist"));

wishlistArr.forEach((element) => {
  const productCart = document.createElement("div");
  const block2 = document.createElement("div");
  const block2pic = document.createElement("div");
  const photo = document.createElement("img");
  const block2text = document.createElement("div");
  const block2txtChild1 = document.createElement("div");
  const block2txtChild1link = document.createElement("a");
  const block2txtChild1price = document.createElement("span");
  const block2txtChild2 = document.createElement("div");
  const basketBtn = document.createElement("div");
  const wishlistBtn = document.createElement("div");

  productCart.appendChild(block2);
  block2.append(block2pic, block2text);
  block2pic.appendChild(photo);
  block2text.append(block2txtChild1, block2txtChild2);
  block2txtChild1.append(block2txtChild1link, block2txtChild1price);
  block2txtChild2.append(basketBtn, wishlistBtn);

  productAllCart.appendChild(productCart);

  productCart.classList.add("productCart");
  block2.classList.add("block2");
  block2pic.classList.add("block2-pic");
  photo.classList.add("photo");
  block2text.classList.add("block2-text");
  block2txtChild1.classList.add("block2-txt-child1");
  block2txtChild2.classList.add("block2-txt-child2");
  block2txtChild1link.classList.add("block2-txt-child1-link");
  block2txtChild1price.classList.add("block2-txt-child1-price");
  basketBtn.classList.add("basketBtn")
  wishlistBtn.classList.add("wishlistBtn");
  wishlistBtn.innerHTML = `<i class="fa-solid fa-heart"></i>`;
  basketBtn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;
  photo.src = element.img;
  block2txtChild1link.innerText = element.name;
  block2txtChild1price.innerText = "$" + element.price;

  if (wishlistArr.find((x) => x.id == element.id) !== undefined) {
    wishlistBtn.style.color = "red";
  }
  // basket
  basketBtn.onclick = function () {
    //eger bu idli elemnent yoxdursa push et
    if (basketArr.find((x) => x.id == element.id) === undefined) {
      basketArr.push({ ...element, count: 1 });
    }
    localStorage.setItem("basket", JSON.stringify(basketArr));
    console.table(basketArr);
  };
  wishlistBtn.onclick = () => {
    console.log(element.id);
    wishlistArr = wishlistArr.filter((x) => x.id !== element.id);
    localStorage.setItem("wishlist", JSON.stringify(wishlistArr));
    wishlistBtn.parentElement.parentElement.parentElement.remove();
  };

});
