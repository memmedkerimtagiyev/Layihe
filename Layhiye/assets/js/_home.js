const productAllCart = document.querySelector(".productAllCart");
let basketArr = [];
let wishlistArr = [];

function getAll() {
  fetch("http://localhost:3000/posts")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        createCart(element);
      });
    });

  window.onload = function () {
    if (localStorage.getItem("basket") !== null) {
      basketArr = JSON.parse(localStorage.getItem("basket"));
    }
    if (localStorage.getItem("wishlist") !== null) {
      wishlistArr = JSON.parse(localStorage.getItem("wishlist"));
    }
  };
}

function createCart(element) {
  const productAllCart = document.querySelector(".productAllCart");

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

  // wishlist

  wishlistBtn.onclick = () => {
    if (wishlistArr.find((x) => x.id == element.id) === undefined) {
      wishlistArr.push(element);
      wishlistBtn.style.color = "red";
    } else {
      wishlistArr = wishlistArr.filter((x) => x.id !== element.id);
      wishlistBtn.style.color = "#666";
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlistArr));
  };
}

getAll();
$(".your-class").slick();

// woman yaradiriq
const women = document.querySelector(".women-btn");
const men = document.querySelector(".men-btn");

women.addEventListener("click", function () {
  console.log("salam");

  fetch("http://localhost:3000/posts")
    .then((res) => res.json())
    .then((data) => {
      productAllCart.innerHTML = "";
      data.forEach((element) => {
        if (element.gender == "women") {
          createCart(element);
        }
      });
    });
});

men.addEventListener("click", function () {
  fetch("http://localhost:3000/posts")
    .then((res) => res.json())
    .then((data) => {
      productAllCart.innerHTML = "";
      data.forEach((element) => {
        if (element.gender == "men") {
          createCart(element);
        }
      });
    });
});
