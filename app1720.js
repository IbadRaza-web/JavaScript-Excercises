var emptyMultiArray = [[]];
console.log(emptyMultiArray);
alert("Empty multidimensional array created: " + JSON.stringify(emptyMultiArray));
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
console.log(matrix);
alert("Matrix: \n" + matrix.map(function(row) { return row.join(" "); }).join("\n"));
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
alert("Counting from 1 to 10 shown in console.");
var num = parseInt(prompt("Enter a number for multiplication table:"));
var length = parseInt(prompt("Enter length of table:"));

var table = "";
for (var i = 1; i <= length; i++) {
    table += num + " x " + i + " = " + (num * i) + "\n";
    console.log(num + " x " + i + " = " + (num * i));
}
alert(table);
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
var fruitList = "";
for (var i = 0; i < fruits.length; i++) {
    fruitList += fruits[i] + "\n";
    console.log(fruits[i]);
}
alert("Fruits:\n" + fruitList);

var counting = "";
for (var i = 1; i <= 15; i++) counting += i + ", ";
console.log("Counting: " + counting.slice(0, -2));


var reverseCounting = "";
for (var i = 10; i >= 1; i--) reverseCounting += i + ", ";
console.log("Reverse counting: " + reverseCounting.slice(0, -2));


var even = "";
for (var i = 0; i <= 20; i += 2) even += i + ", ";
console.log("Even: " + even.slice(0, -2));


var odd = "";
for (var i = 1; i < 20; i += 2) odd += i + ", ";
console.log("Odd: " + odd.slice(0, -2));


var series = "";
for (var i = 2; i <= 20; i += 2) series += i + "k, ";
console.log("Series: " + series.slice(0, -2));

alert("Series generated. Check console for details.");
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Enter item to search:");

if (A.includes(searchItem.toLowerCase())) {
    alert(searchItem + " is available in the list.");
    console.log(searchItem + " found in the array.");
} else {
    alert(searchItem + " is not available in the list.");
    console.log(searchItem + " not found in the array.");
}
var numbers = [24, 53, 78, 91, 12];
var largest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) largest = numbers[i];
}

console.log("Largest number is " + largest);
alert("Largest number is " + largest);
var smallest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) smallest = numbers[i];
}

console.log("Smallest number is " + smallest);
alert("Smallest number is " + smallest);
var multiplesOf5 = "";
for (var i = 5; i <= 100; i += 5) {
    multiplesOf5 += i + ", ";
    console.log(i);
}
alert("Multiples of 5 from 1 to 100:\n" + multiplesOf5.slice(0, -2));
