alert("welcome to Saro Craft !");
alert("if you orderd less than 3 or more than 10 pieces you will not have any discount !");
 

var productType =prompt("Do you need Masterpieces or Accessories ?");
var noProduct = prompt(" how many pieces are you going to buy  ?");
var orderDetails ;

if (noProduct > 2 && noProduct <= 5){

    orderDetails="congrats you got a 15% discount!"

}else if (noProduct > 6 && noProduct <= 10){

    orderDetails="congrats you got a 25% discount!"

}
else {

    orderDetails="No Discount !"
}



document.getElementById("order").innerText=productType;
document.getElementById("productcount").innerText=noProduct;
document.getElementById("orderdiscount").innerText=orderDetails;


confirm("you are welcome anytime !");
alert("GoodBye!");


