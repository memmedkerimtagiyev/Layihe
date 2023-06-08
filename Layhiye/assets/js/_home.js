$(".your-class").slick();

function getAll() {
  fetch("http://localhost:3000/posts")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((elemenet) => {
        console.log(elemenet);
        createCart(elemenet);
      });
    });
}

function createCart(elemenet) {
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
  const block2txtChild2heartPrice = document.createElement("a");
  const heartPrice = document.createElement("i");

  productCart.appendChild(block2);
  block2.append(block2pic, block2text);
  block2pic.appendChild(photo);
  block2text.append(block2txtChild1, block2txtChild2);
  block2txtChild1.append(block2txtChild1link, block2txtChild1price);
  block2txtChild2.appendChild(block2txtChild2heartPrice);
  block2txtChild2heartPrice.appendChild(heartPrice);
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
  block2txtChild2heartPrice.classList.add("block2-txt-child2-heart-price");
  // heartPrice.classList.add("fa-solid ");
  heartPrice.innerHTML = ` <i class="fa-solid fa-heart"></i>`;
  photo.src = elemenet.img;
  block2txtChild1link.innerText = elemenet.name;
  block2txtChild1price.innerText = elemenet.price;
}

getAll();
