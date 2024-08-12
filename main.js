// let value = 0;
// function enterpill() {
//   value = +prompt("enter the pill");
//   console.log(value);
// }
// function enterdescount() {
//   let descount1 = +prompt("enterdescount") / 100;
//   let descount = value * descount1;
//   let newvalue = value - descount;
//   console.log(newvalue);
//   value = newvalue;
// }
// function enteradvantage() {
//   let advantage = +prompt("enteradvantage");
//   let advantage1 = value + value * (advantage / 100);
//   console.log(advantage1);
//   value = advantage1;
// }
let usergov = prompt("enter your governerate");
switch(usergov){
  case "cairo":alert("10%");
  break;
  case "giza":alert("33%");
  break;
  case "alex":alert("50%");
  break;
  case "aswan":alert("30%");
  break;
  case "matrooh":alert("20%");
  break;
  default: alert("60%");
}
