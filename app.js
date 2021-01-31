//function greeting(){
  var hourNow = prompt('what is the time');
  console.log(hourNow)
  // 
  var message= '';
  console.log(message);
  if(hourNow >= 18  && hourNow <= 24){ //f
      message = 'Good Evening';
  }else if(hourNow >= 12 && hourNow < 18){
      message = 'Good Afternoon';
  }else if (hourNow >= 0 && hourNow< 12){
      message = 'Good morning';
  }else{
      alert('Welcome ')
  }
  document.write('<h2>' + message + '</h2>');

 // }
//greeting();

  //function orderingCookie(){
  var userOrder = prompt('what would you like to order Masterpieces or Accessories','place your order');
  while(!(userOrder =='Masterpieces' || userOrder =='Accessories')){
            
                  
      userOrder = prompt('please enter the correct item')
  }
  
  
  var userInputs = prompt('how many Pieces do you want?')
  // 5 
  var image=''; 
  
  // docuemnt.write()
  // 3
  for(var i = 0; i < userInputs; i++){
      if(userOrder =='Masterpieces'){
          image = image + '<img src="">'
          console.log(image)
          
      }else if(userOrder =='Accessories'){
          image = image +'<img src="">'
    
      }
  
  }
  
  document.write(image)
  
  }
  
  greeting();
  orderingCookie();