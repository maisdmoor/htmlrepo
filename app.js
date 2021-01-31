function product(){
    var product = prompt ('masterpieces or accessories');


while (product !== 'masterpieces' && product !== 'accessories'){

    product = prompt ('masterpieces or accessories');
    
    }
}
//function Product1(){
    var youprefer = '';
    
    if ( product === 'masterpieces'){
        youprefer = '<img src="image/piece.jpg"/>';
    }else if ( product === 'accessories'){
        youprefer = '<img src="./image/mpiece.jpg"/>';
    }
  // }
   function pieces(){
    var noof = prompt ('how many pieces do you want?');
    
    var result ='';
  
    for (var i = 0 ; i < noof ; i++){
    result = result + youprefer;
    
    }
    
    document.write(result);
    alert(' :) ')
}
product();
//Product1();
pieces();


