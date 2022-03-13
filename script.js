`use strict`;

let ProductNameInput = document.getElementById("ProductNameInput");
let ProductPriceInput = document.getElementById("ProductPriceInput");
let ProductCategoryInput = document.getElementById("ProductCategoryInput");
let productDescripitionInput = document.getElementById("ProductDescripitionInput");

let selectedIndex = null;

let containerProducts = [];
containerProducts = JSON.parse(localStorage.getItem("myproducts"));
if (localStorage.getItem("myproducts") == null) {
  containerProducts = [];
} else {
  containerProducts = JSON.parse(localStorage.getItem("myproducts"));
  addProduct();
}

function operation() {
  let product = {
    namee: ProductNameInput.value,
    price: ProductPriceInput.value,
    categoy: ProductCategoryInput.value,
    desc: ProductDescripitionInput.value,
  };

  containerProducts.push(product);
  localStorage.setItem("myproducts", JSON.stringify(containerProducts)); //update a5er 3naser mawgoda fe el array b3d eladfa
  addProduct();
  clearForm(); //function call in another function
  console.log(containerProducts);
}

function clearForm() {
  ProductNameInput.value = "";
  ProductPriceInput.value = "";
  ProductCategoryInput.value = "";
  ProductDescripitionInput.value = "";
}

function addProduct() {
  let cartoona = "";
  for (let i = 0; i < containerProducts.length; i++) {
    cartoona +=
      `
    <tr>

    <td>` +
      i +
      `</td>
    <td>` +
      containerProducts[i].namee +
      `</td>
    <td>` +
      containerProducts[i].price +
      `</td>
    <td>` +
      containerProducts[i].categoy +
      `</td>
    <td>` +
      containerProducts[i].desc +
      `</td>
    <td> <button  onclick="updateProduct(` +
      i +
      `)" class="btn btn-outline-warning">update</button></td>
    <td> <button onclick="deleteProduct(` +
      i +
      `)" class="btn btn-outline-danger">delete</button></td>

    </tr>`;
  }
  document.getElementById("tableBody").innerHTML = cartoona;
}

function deleteProduct(productIndex) {
  containerProducts.splice(productIndex, 1);
  localStorage.setItem("myproducts", JSON.stringify(containerProducts)); // update a5er 3naser mawgoda fe el array b3d el7zf

  addProduct(); // show elements after delete
}

function searchProduct(searchTerm) {
  let cartoona2 = "";

  for (let i = 0; i < containerProducts.length; i++) {
    if (
      containerProducts[i].namee.toLowerCase().includes(searchTerm.toLowerCase()) == true ||
      containerProducts[i].categoy.toLowerCase().includes(searchTerm.toLowerCase()) == true
    ) {
      cartoona2 +=
        `
    <tr>

    <td>` +
        i +
        `</td>
    <td>` +
        containerProducts[i].namee +
        `</td>
    <td>` +
        containerProducts[i].price +
        `</td>
    <td>` +
        containerProducts[i].categoy +
        `</td>
    <td>` +
        containerProducts[i].desc +
        `</td>
    <td> <button onclick="updateProduct(` +
        i +
        `)" class="btn btn-outline-warning">update</button></td>
    <td> <button onclick="deleteProduct(` +
        i +
        `)" class="btn btn-outline-danger">delete</button></td>

    </tr>`;
    } else {
      console.log("m4mawgood");
    }
  }
  document.getElementById("tableBody").innerHTML = cartoona2;
}

function updateProduct(productIndex) {
  ProductNameInput.value = containerProducts[productIndex].namee;
  ProductPriceInput.value = containerProducts[productIndex].price;
  ProductCategoryInput.value = containerProducts[productIndex].categoy;
  ProductDescripitionInput.value = containerProducts[productIndex].desc;
  selectedIndex = productIndex;
}

function onUpdateBtnClick() {
  containerProducts[selectedIndex].namee = ProductNameInput.value;
  console.log(containerProducts[selectedIndex]);
}
