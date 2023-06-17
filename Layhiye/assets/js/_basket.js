const tbody = document.querySelector("tbody");
const totals = document.querySelector(".totals");
const product_total = document.createElement("td");
console.log(product_total);
let basketArr = [];

basketArr = JSON.parse(localStorage.getItem("basket"));

basketArr.forEach((element) => {
  const table_row = document.createElement("tr");
  const product_photo = document.createElement("td");
  const photo = document.createElement("img");
  const product_name = document.createElement("td");
  const product_price = document.createElement("td");
  const product_quantity = document.createElement("td");
  const quantity_content = document.createElement("div");
  const inc = document.createElement("button");
  const product_number = document.createElement("p");
  const dec = document.createElement("button");
  const product_total = document.createElement("td");
  const product_delet = document.createElement("td");
  const delete_btn = document.createElement("button");

  table_row.classList.add("table_row");
  product_photo.classList.add("product_photo");
  photo.classList.add("photo");
  // product_price.classList.add("product_price")
  product_quantity.classList.add("product_quantity");
  inc.classList.add("inc");
  dec.classList.add("dec");
  product_number.classList.add("product_number");
  quantity_content.classList.add("quantity_content");
  delete_btn.classList.add("delete_btn");

  product_total.innerHTML = element.count * element.price;

  photo.src = element.img;
  product_name.innerHTML = element.name;
  product_price.innerHTML = "$" + element.price;
  inc.innerHTML = "+";
  dec.innerHTML = "-";
  delete_btn.innerHTML = "X";
  product_number.innerHTML = element.count;

  //artim
  inc.onclick = () => {
    product_number.innerHTML++;

    basketArr[basketArr.findIndex((x) => element.id === x.id)].count++;
    localStorage.setItem("basket", JSON.stringify(basketArr));
    getTotalAll();
    product_total.innerHTML = element.count * element.price;
  };
  //azalma
  dec.onclick = () => {
    if (product_number.innerHTML === "1") {
      return;
    }
    product_number.innerHTML--;

    basketArr[basketArr.findIndex((x) => element.id === x.id)].count--;
    localStorage.setItem("basket", JSON.stringify(basketArr));
    getTotalAll();
    product_total.innerHTML = element.count * element.price;
  };
  delete_btn.onclick = () => {
    basketArr = basketArr.filter((x) => x.id !== element.id);
    localStorage.setItem("basket", JSON.stringify(basketArr));
    getTotalAll();

    delete_btn.parentElement.parentElement.remove();
  };

  table_row.append(
    product_photo,
    product_name,
    product_price,
    product_quantity,
    product_total,
    product_delet
  );
  product_photo.appendChild(photo);
  product_quantity.appendChild(quantity_content);
  quantity_content.append(inc, product_number, dec);
  product_delet.appendChild(delete_btn);
  tbody.appendChild(table_row);
});

function getTotalAll() {
  totals.innerHTML =
    "$" + basketArr.reduce((sum, prev) => sum + prev.price * prev.count, 0);
}

getTotalAll();
