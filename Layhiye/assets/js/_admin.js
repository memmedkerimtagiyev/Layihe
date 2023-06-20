const table = document.querySelector("table");
const formAdd = document.querySelector("form");
console.log(formAdd);

function getAll() {
  fetch("http://localhost:3000/posts")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        console.log(element);

        createCart(element);
      });
    });
}

function createCart(element) {
  const tr = document.createElement("tr");
  const ID = document.createElement("td");
  const type = document.createElement("td");
  const productImg = document.createElement("td");
  const img = document.createElement("img");
  const producName = document.createElement("td");
  const productPrice = document.createElement("td");
  const productEdit = document.createElement("td");
  const productDelete = document.createElement("td");
  const editbtn = document.createElement("button");
  const deletebtn = document.createElement("button");
  editbtn.classList = "edit_delet_btn";
  deletebtn.classList = "edit_delet_btn";
  tr.classList = "table_tr";

  tr.append(
    ID,
    productImg,
    type,
    producName,
    productPrice,
    productEdit,
    productDelete
  );
  productImg.appendChild(img);
  productEdit.appendChild(editbtn);
  productDelete.appendChild(deletebtn);
  table.appendChild(tr);

  img.src = element.img;
  ID.innerText = element.id;
  type.innerText = element.type;
  producName.innerText = element.name;
  productPrice.innerText = "$" + element.price;
  editbtn.innerText = "Edit";
  deletebtn.innerText = "Delete";

  deletebtn.onclick = () => {
    fetch("http://localhost:3000/posts/" + element.id, { method: "delete" })
      .then((res) => res.json())
      .then((result) => {
        table.innerHTML = "";
        getAll();
      });
  };
  //edit
  editbtn.onclick = () => {
    fetch("http://localhost:3000/posts/" + element.id, { method: "delete" })
      .then((res) => res.json())
      .then((result) => {
        const photo = document.querySelector(".photo");
        const type = document.querySelector(".type");
        const productName = document.querySelector(".productName");
        const productPrice = document.querySelector(".productPrice");
        const addBtn = document.querySelector(".addBtn");

        photo.value = element.img;
        type.value = element.type;
        productName.value = element.name;
        productPrice.value = element.price;

        table.innerHTML = "";
        getAll();
        console.log(element.id);
      });
  };
}

function addProduct() {
  const photo = document.querySelector(".photo");
  const type = document.querySelector(".type");
  const productName = document.querySelector(".productName");
  const productPrice = document.querySelector(".productPrice");
  const addBtn = document.querySelector(".addBtn");

  addBtn.onclick = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        img: photo.value,
        price: productPrice.value,
        type: type.value,
        name: productName.value,
      }),
      cache: "default",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        table.innerHTML = "";
        photo.value=""
        productPrice.value=""
        type.value=""
        productName.value=""
        getAll();
      });
  };
}

addProduct();

// edit btn
// const editbtns = document.querySelectorAll(".editbtn");
// console.log(editbtns);
