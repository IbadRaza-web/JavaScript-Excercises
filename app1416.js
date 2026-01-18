var studentnames = []
var string = ["Milan", "Madrid", "Barcelona", "Manchester", "Naples", "London", "Manchester", "Rome","Paris"]
var numbers = [1, 2, 3, 4, 5]
var boolean = [true, false]
var mixed = ["Manchester is red", 1, true]
var qualifications = [
        "SSC",
        "HSC",
        "BCS",
        "BS",
        "BCOM",
        "MS",
        "M. Phil.",
        "PhD"
    ];

    console.log("<h2>Qualifications:</h2>");
    for (var i = 0; i < qualifications.length; i++) {
        console.log((i + 1) + ") " + qualifications[i] + "<br>");
    }
    var studentNames = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var totalMarks = 500;

for (var i = 0; i < studentNames.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    console.log("Score of " + studentNames[i] + " is " + scores[i] + ". Percentage: " + percentage + "%<br>");
}
var colors = ["Red", "Green", "Blue"];
console.log(colors);

var addStart = prompt("Enter a color to add at the beginning:");
colors.unshift(addStart);
console.log(colors);

var addEnd = prompt("Enter a color to add at the end:");
colors.push(addEnd);
console.log(colors);

colors.unshift("Purple", "Orange");
console.log(colors);

colors.shift();
console.log(colors);

colors.pop();
console.log(colors);

var addIndex = +prompt("Enter index to add color:");
var addColor = prompt("Enter color name:");
colors.splice(addIndex, 0, addColor);
console.log(colors);

var delIndex = +prompt("Enter index to delete color(s):");
var delCount = +prompt("How many colors to delete?");
colors.splice(delIndex, delCount);
console.log(colors);
var scores = [320, 230, 480, 150, 400];

scores.sort(function(a, b) {
    return a - b;
});

console.log(scores);
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(1, 4);
console.log(selectedCities);

var arr = ["This ", " is ", " my ", " cat"];
var sentence = arr.join("");
console.log(sentence);

var fifo = [];
fifo.push("Keyboard");
fifo.push("Mouse");
fifo.push("Printer");
console.log(fifo.shift());
console.log(fifo.shift());
console.log(fifo.shift());

var lifo = [];
lifo.push("Keyboard");
lifo.push("Mouse");
lifo.push("Printer");
console.log(lifo.pop());
console.log(lifo.pop());
console.log(lifo.pop());

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


for (var i = 0; i < manufacturers.length; i++) {
    alert( manufacturers[i] );
}

