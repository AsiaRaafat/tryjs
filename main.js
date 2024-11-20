//lec12***
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
//task11***
// let usergov = prompt("enter your governerate");
// switch(usergov){
//   case "cairo":alert("10%");
//   break;
//   case "giza":alert("33%");
//   break;
//   case "alex":alert("50%");
//   break;
//   case "aswan":alert("30%");
//   break;
//   case "matrooh":alert("20%");
//   break;
//   default: alert("60%");
// }

//lec12 functions***

// let fanstatus= false;
// let fanspeed= 1; 

//   function makeAll() {
//     if (fanstatus==false){
//       fanstatus=true;
//       console.log("fan is open and fanspeed is 1");
//     }else if( fanspeed<3&&fanstatus==true) {
//       fanspeed++;
//       console.log(fanspeed);
//     }else {
//       fanstatus=false;
//       console.log("fan is closed");
//     }
//   }
//task12.2 التانية الي بعد المايكرويف 
// let num1 =0;
// let num2 =0;
// function enternumber1(){
//   num1=+prompt("enter  first number");
//   console.log(num1);
// }
// function enternumber2(){
//   num2=+prompt("enter second number");
//   console.log(num2);
// }
// function summition(){
//   let sum =num1+num2;
//   console.log(`the sum of two numbers is ${sum}`);
// }
// function subtract(){
//   let sub =num1-num2;
//   console.log(`the sum of two numbers is ${sub}`);
// }
// function devition(){
//   let dev =num1/num2;
//   console.log(`the sum of two numbers is ${dev}`);
// }
// function multiplication(){
//   let  multiply =num1*num2;
//   console.log(`the sum of two numbers is ${multiply}`);
// }
// ده شرح ال array lec13***

//  let tasks = [""];
// function addtask(){
//   let task = prompt("enter task");
//   tasks.push(task);
//   console.clear();
//   showtask();
// }
// function removetask(){
//  let task=+prompt("enter task number you want to delete");
//   let index=task-1;
//   tasks.splice(index,1);
//   console.log(tasks);
// }
// let tasks =["gotogym","gotowork","gotosleep"];
// function updatetask(){
//     let task= +prompt("enter number task you want to ubdate");
//     let index=task-1;
//     let newtask= prompt("enter new task");
//     tasks.splice(index,1,newtask);
//     console.clear();
//     console.log(tasks);
// }
// function showtask(){
// tasks.forEach((task,index)=>{
//   console.log(index+1+`${task}`);
// });}
