// 1. Merge first and last name and greet user
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello " + fullName + "!");
console.log("Full Name:", fullName);

// 2. Find length of favorite mobile model
var mobile = prompt("Enter your favorite mobile phone model:");
alert("Length of your input: " + mobile.length);
console.log("Mobile:", mobile, "Length:", mobile.length);

// 3. Index of "n" in "Pakistani"
var word = "Pakistani";
var indexN = word.indexOf("n");
alert("Index of 'n' in 'Pakistani' is: " + indexN);
console.log("Index of 'n':", indexN);

// 4. Last index of "l" in "Hello World"
var hello = "Hello World";
var lastIndexL = hello.lastIndexOf("l");
alert("Last index of 'l' in 'Hello World' is: " + lastIndexL);
console.log("Last index of 'l':", lastIndexL);

// 5. Character at 3rd index in "Pakistani"
var charAt3 = word.charAt(3);
alert("Character at index 3 in 'Pakistani' is: " + charAt3);
console.log("Char at 3:", charAt3);

// 6. Repeat Q1 using concat()
var fullName2 = firstName.concat(" ", lastName);
alert("Hello " + fullName2 + "!");
console.log("Full Name using concat():", fullName2);

// 7. Replace "Hyder" with "Islam" in "Hyderabad"
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
alert("After replacement: " + newCity);
console.log("New City:", newCity);

// 8. Replace all "and" with "&"
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
alert(newMessage);
console.log(newMessage);

// 9. Convert string "472" to number 472
var strNum = "472";
var num = Number(strNum);
alert("Value: " + num + ", Type: " + typeof num);
console.log("Value:", num, "Type:", typeof num);

// 10. Convert user input to uppercase
var userInput = prompt("Enter some text to convert to uppercase:");
alert("Uppercase: " + userInput.toUpperCase());
console.log("Uppercase:", userInput.toUpperCase());

// 11. Convert user input to title case
var inputTitle = prompt("Enter text for title case:");
var titleCase = inputTitle.toLowerCase().split(" ").map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}).join(" ");
alert("Title Case: " + titleCase);
console.log("Title Case:", titleCase);

// 12. Convert number to string and remove dot
var num2 = 35.36;
var strNum2 = num2.toString().replace(".", "");
alert("Number without dot: " + strNum2);
console.log("Number as string without dot:", strNum2);

// 13. Validate username for special characters
var username = prompt("Enter a username:");
while (username.match(/[@.,!]/)) {
    username = prompt("Invalid username. Enter a valid username:");
}
alert("Valid username: " + username);
console.log("Username validated:", username);

// 14. Search in array (case-insensitive)
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem2 = prompt("Enter item to search:");
var found = A.some(function(item) {
    return item.toLowerCase() === searchItem2.toLowerCase();
});
if (found) {
    alert(searchItem2 + " is available in the list.");
} else {
    alert(searchItem2 + " is not available in the list.");
}
console.log("Search result for", searchItem2, ":", found);

// 15. Validate password
var password = prompt("Enter your password:");
while (
    !password.match(/[a-zA-Z]/) || 
    !password.match(/[0-9]/) || 
    password.charAt(0).match(/[0-9]/) || 
    password.length < 6
) {
    password = prompt("Invalid password. Must contain letters & numbers, not start with number, and be at least 6 characters:");
}
alert("Password accepted.");
console.log("Password validated:", password);

// 16. Convert string to array using split
var university = "University of Karachi";
var uniArray = university.split("");
alert("Array elements:\n" + uniArray.join("\n"));
console.log("Array elements:", uniArray);

// 17. Display last character of user input
var userText = prompt("Enter some text:");
var lastChar = userText.charAt(userText.length - 1);
alert("Last character: " + lastChar);
console.log("Last character:", lastChar);

// 18. Count occurrences of "the" in a string
var str = "The quick brown fox jumps over the lazy dog";
var countThe = (str.toLowerCase().match(/the/g) || []).length;
alert("Number of occurrences of 'the': " + countThe);
console.log("Occurrences of 'the':", countThe);
