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