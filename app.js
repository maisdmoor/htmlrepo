// THIS IS A JS COMMENT

/*
this is a 
multiline 
comment
*/

/*
functions 
are like a box 
we get input => process => get output
*/
// function deceleration
function getName() {
    var userName = prompt('Enter your name?');
    console.log(typeof prompt);
    console.log(userName);
    for (var i = 0; i <= 10; i++) {
      console.log(i);
    }
  }
  
  getName();
  // a and b are the input
  // function expression
  var getSum = function (a, b) {
    var c = a + b;
    // c is the output or return value
    return c;
  };
  
  var sum = getSum(10, 4);
  alert(sum);
  document.write(sum);
  console.log(getSum(20, 5));