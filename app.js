var birthInput = prompt("Enter your birth date in YYYY-MM-DD format");
var birthDate = new Date(birthInput);

var birthMilliseconds = birthDate.getTime();
var currentDate = new Date();
var currentMilliseconds = currentDate.getTime();

var diffMilliseconds = currentMilliseconds - birthMilliseconds;

var secondsAlive = diffMilliseconds / 1000;
var hoursAlive = secondsAlive / 3600;
var daysAlive = hoursAlive / 24;
var monthsAlive = daysAlive / 30.44;
var yearsAlive = daysAlive / 365.25;

alert(
  "You have been alive for:\n" +
  Math.floor(secondsAlive) + " seconds\n" +
  Math.floor(hoursAlive) + " hours\n" +
  Math.floor(daysAlive) + " days\n" +
  Math.floor(monthsAlive) + " months\n" +
  Math.floor(yearsAlive) + " years"
);

var ramadan_time = new Date();

ramadan_time.setMonth(1)
ramadan_time.setDate(18)
ramadan_time.setHours(18)
ramadan_time.setMinutes(30)
ramadan_time.setSeconds(34)
console.log(ramadan_time)
console.log("This will be the first Roza of month; Ramadan " + ramadan_time)

