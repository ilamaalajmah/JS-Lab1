console.log("--------Rectangle Calculation--------");
let length = 10; 
let width = 5;  
let area = length * width;
console.log(`The area of the rectangle is: ${area}`);


console.log("--------temperature converter--------");
let celsius = 25; 
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius}°C is ${fahrenheit}°F`);
fahrenheit = 77; 
celsius = (fahrenheit - 32) * 5/9;
console.log(`${fahrenheit}°F is ${celsius.toFixed(2)}°C.`);



console.log("---------Store the number of hours-------");
let hours = 2; 
let seconds = hours * 3600;
console.log(`${hours} hours = ${seconds} seconds`);



console.log("------------Concatenation-------------");
let thingOne="Lama";
let thingTwo="Abdullah";
console.log(thingOne,thingTwo);



console.log("-----------Total bill---------------");
var bill = 10.25 + 3.99 + 7.15;
var tip = bill * 0.15;
var total = bill + tip;
console.log(total);



console.log("------------Mad Libs-----------------");
var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
var madLib = "The Intro to JavaScript course is " + adjective1 + ". James and Julia are so " + adjective2 + ". I cannot wait to work through the rest of this " + adjective3 + " content!";
console.log(madLib);



console.log("------------Awesome Message-----------------");
var firstName = "Lama";
var interest = "Programming";
var hobby = "Watching Movies";
var awesomeMessage = "Hi, my name is " + firstName + ". I love " + interest + ". In my spare time, I like to " + hobby + ".";
console.log(awesomeMessage);

