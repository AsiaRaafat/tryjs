let num1 =0;
let num2 =0;
function enternumber1(){
  num1=+prompt("enter  first number");
  console.log(num1);
}
function enternumber2(){
  num2=+prompt("enter second number");
  console.log(num2);
}
function summition(){
  let sum =num1+num2;
  console.log(`the sum of two numbers is ${sum}`);
}
function subtract(){
  let sub =num1-num2;
  console.log(`the sum of two numbers is ${sub}`);
}
function devition(){
  let dev =num1/num2;
  console.log(`the sum of two numbers is ${dev}`);
}
function multiplication(){
  let  multiply =num1*num2;
  console.log(`the sum of two numbers is ${multiply}`);
}



// microwave 
let micro = false;
 
function microwaveon (){
  if (micro==false){
    micro==true;
    console.log("microwave is ON");
  }
}

function timeon(){

    setTimeout(foodisready,2000);
}

function microwaveoff(){
  if (micro==true){
    micro==false;
    alert("microwave is OFF");
  }else {
    alert("microwave is OFF");
  }

}
function foodisready(){
    console.log("your food is ready");
}