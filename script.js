let phones = [""];
let prices = [""];
let pop = [""];

function showphoneAndprice() {
  let phone = prompt("enter phonetype");
  phones.push(phone);
  let price = prompt("enter phone price");
  prices.push(price);
  pop.push(`${phone}:${price}`);
  console.clear();
  showphone();
  showprice();
  console.log(pop);
}
// for each (pop[index],index)

function addphone() {
  let phone = prompt("enter phone type");
  phones.push(phone);
  console.clear();
  showphone();
}

function showphone() {
  phones.forEach((phone, index) => {
    console.log(index + 1 + `${phone}`);
  });
}

function addprice() {
  let price = prompt("enter phone price");
  prices.push(price);
  console.clear();
  showprice();
}

function showprice() {
  prices.forEach((price, index) => {
    console.log(index + 1 + `${price}`);
  });
}

// function removetask(){
//   task=+prompt("enter task number you want to delete");
//   index=task-1;
//   tasks.splice(index,1);
//   console.log(tasks);
//}
