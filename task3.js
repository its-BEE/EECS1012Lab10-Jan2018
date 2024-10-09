/* Lab 10 - Task 3 */
/* write your JS code here */

function add()
{
  var keyone= document.getElementById("keya");
  var keytwo = document.getElementById("keyb");
  var response = document.getElementById("response");
  var addition = parseInt(keyone.value)+ parseInt(keytwo.value);
  response.innerHTML = addition;
var add = document.getElementById("add");
add.style.background = "Blue";
var subtract = document.getElementById("subtract");
subtract.style.background = "White";
var multiply = document.getElementById("multiply");
multiply.style.background = "White";

}

function subtract()
{
  var keyone= document.getElementById("keya");
  var keytwo = document.getElementById("keyb");
  var response = document.getElementById("response");
  var subtraction = parseInt(keyone.value) - parseInt(keytwo.value);
  response.innerHTML = subtraction;

var subtract = document.getElementById("subtract");
subtract.style.background = "red";

var add = document.getElementById("add");
add.style.background = "white";

var multiply = document.getElementById("multiply");
multiply.style.background = "white";

}

 function multiply()
 {
   var keyone= document.getElementById("keya");
   var keytwo = document.getElementById("keyb");
   var response = document.getElementById("response");
   var multiplication = parseInt(keyone.value) * parseInt(keytwo.value);
   response.innerHTML = multiplication;
 var add = document.getElementById("add");
 add.style.background = "white";
 var subtract = document.getElementById("subtract");
 subtract.style.background = "white";
 var multiply = document.getElementById("multiply");
 multiply.style.background = "red";
 }
