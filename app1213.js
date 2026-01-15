// Excercise One
var input = prompt("Enter a character");

var code = input.charCodeAt(0);

if (code >= 48 && code <= 57) {
    alert("Your character is a Number");
}
else if (code >= 65 && code <= 90) {
    alert("Your character is a Uppercase letter");
}
else if (code >= 97 && code <= 122) {
    alert("Your character is a Lowercase letter");
}
else {
    alert("Your character is not a letter or number");
}
//Excercise Two
var num1= Number( prompt("Enter first integer"))
var num2= Number(prompt("Enter second integer"))

if(num1 > num2){
  alert("Your first number was larger")
}
else if(num2 > num1){
  alert("Your second number was larger")
}
else if (num1 === num2){
  alert("Your both numbers are equal")
} else{
  alert("Your both numbers are invalid")
}
//Excercise Three
var numinput= Number(prompt("Enter any number"))
if (numinput>0){
  alert("Your number is positive")
}
else if(numinput<0){
  alert("Your number is negative")
}
else if(numinput === 0){
  alert("Your number is zero")
} else{alert("Your number is invalid")}
//Excercise Four
var vowels= ["a", "e", "u", "o", "i"]
var char = prompt("Enter any character")
if(char.length == 1){
  if(char === vowels[1]){
  alert("Your character is a vowel")}
   else if(char === vowels[2]){
  alert("Your character is a vowel")}
  else if(char === vowels[3]){
  alert("Your character is a vowel")}
  else if(char === vowels[4]){
  alert("Your character is a vowel")}
  else if(char === vowels[5]){
  alert("Your character is a vowel")}
  else("Your character is NOT a vowel")
} else(
  alert("Enter a singular valid character")
)
//Excercise Five
var password= "Player1234"
var input= prompt("Enter password")
if (input===""){alert("Please enter your password")}
else if(input === "Player1234"){
  alert("Correct Password")
} else{alert("Incorrect Password")}
//Excercise Six
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}
//Excercise Seven
var time = prompt("Enter time in 24-hour format (e.g. 1900):");
time = Number(time);

if (time >= 0 && time < 1200) {
    alert((time / 100) + " AM");
}
else if (time === 1200) {
    alert("12 PM");
}
else if (time > 1200 && time < 2400) {
    alert((time / 100 - 12) + " PM");
}
else {
    alert("Invalid time");
}

