// let phones = [""];
// let prices = [""];
// let pop = [""];

// function showphoneAndprice() {
//   let phone = prompt("enter phonetype");
//   phones.push(phone);
//   let price = prompt("enter phone price");
//   prices.push(price);
//   pop.push(`${phone}:${price}`);
//   console.clear();
//   showphone();
//   showprice();
//   console.log(pop);
// }

// function addphone() {
//   let phone = prompt("enter phone type");
//   phones.push(phone);
//   console.clear();
//   showphone();
// }

// function showphone() {
//   phones.forEach((phone, index) => {
//     console.log(index + 1 + `${phone}`);
//   });
// }

// function addprice() {
//   let price = prompt("enter phone price");
//   prices.push(price);
//   console.clear();
//   showprice();
// }

// function showprice() {
//   prices.forEach((price, index) => {
//     console.log(index + 1 + `${price}`);
//   });
// }

// function removetask(){
//   task=+prompt("enter task number you want to delete");
//   index=task-1;
//   tasks.splice(index,1);
//   console.log(tasks);
// }






// apllication on *LEC15*//
let table = document.querySelector("table tbody");
let phoneNameInput = document.querySelector("#phoneName");
let phonePriceInput = document.querySelector("#phonePrice");

let products = [
  { name: "iPhone x", price: 200 },
  { name: "iPhone 11", price: 400 },
  { name: "iPhone 12", price: 500 },
  { name: "iPhone 13", price: 600 },
];

function renderProdcuts() {
  table.innerHTML = "";
  products.forEach((el, index) => {
    table.innerHTML += `
              <tr>
                  <td>1</td>
                  <td>${el.name}</td>
                  <td>${el.price} $</td>
                  <td><button class="btn btn-danger">Del</button></td>
              </tr>
          `;
  });
}

function addNewProduct() {
  let nameVal = phoneNameInput.value;
  let priceVal = phonePriceInput.value;
  let newPhoneObj = {
    name: nameVal,
    price: priceVal,
  };
  products.push(newPhoneObj);
  renderProdcuts();
}
renderProdcuts();
