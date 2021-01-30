alert("welcome to Saro Craft !");
 

var productType =prompt("Do you need Masterpieces or Accessories ?")
var noProduct = prompt(" how many pieces are you going to buy  ?");
var orderDetails ;

if (noProduct > 2 && noProduct <= 5){

    orderDetails="congrats you got a 15% discount!"

}else if (noProduct > 6 && noProduct <= 10){

    orderDetails="congrats you got a 25% discount!"

}
else {

    orderDetails="if you orderd less than 2 pieces you will not have any discount !"
}



document.getElementById("order").innerText=productType;
document.getElementById("orderdiscount").innerText=orderDetails;
document.getElementById("productcoun").innerText=noProduct;
