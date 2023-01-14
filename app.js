// Math Expression First Task

var numberOne = +prompt("Enter first Number");
var numberTwo = +prompt("Enter second Number");

var sumValue = numberOne + numberTwo;

document.write(`Sum of ${numberOne} and ${numberTwo} is equal to ${sumValue} <br>`);


// Math Expression Second Task
var numberthree = +prompt("Enter first Number");
var numberfour = +prompt("Enter second Number");

var diffValue = numberthree - numberfour;
var prodValue = numberthree * numberfour;
var divValue = numberthree / numberfour;

document.write(`Difference of ${numberthree} and ${numberfour} is equal to ${diffValue} <br>`);
document.write(`Product of ${numberthree} and ${numberfour} is equal to ${prodValue} <br>`);
document.write(`Division of ${numberthree} and ${numberfour} is equal to ${divValue} <br>`);

// Task 3 

var varNum = undefined;
document.write("Value of varaible after declaration " + varNum + "<br>");
varNum = 5;
document.write("Value of varaible after Intialization " + varNum + "<br>");
varNum++;
document.write("Value of varaible after Increment " + varNum + "<br>");
addingNum = varNum+7;
document.write("Value of varaible adding seven " + addingNum + "<br>");
addingNum--;
document.write("Value of varaible after decreament " + addingNum + "<br>");
remainderValue = addingNum % 3;
document.write("Value of varaible after division " + remainderValue + "<br>");


// Task 4

var ticketPrice = 600;
var userSeats = 5;

document.write('The Total cost of the tickets are ' + ticketPrice*userSeats + "<br>")

// Task 5

var tableNum = 4;
let txt= '';

for(var i=0; i<=10; i++){
    txt += tableNum + ' x ' + i + ' = ' + tableNum*i + '<br>';

}

document.write(txt)


// Task 6

let celsiusTemperature = 25;
let FarhanietTemperature = 70;

let calcFarh;
let calcCel;

calcFarh = (celsiusTemperature * (9/5)) + 32;

document.write(celsiusTemperature + "<sup>o</sup>C is " + calcFarh + "<sup>o</sup>F <br>")

calcCel = (FarhanietTemperature - 32) * 5/9;

document.write(FarhanietTemperature + "<sup>o</sup>F is " + calcCel + "<sup>o</sup>C <br>")


// Task 7

let priceItemOne = 650;
let priceItemTwo = 700;

let qtItemOne = 3;
let qtItemTwo = 4;

let totalCost = (priceItemOne*qtItemOne) + (priceItemTwo*qtItemTwo);

document.write("Total Cost of your order is " + totalCost + '<br>')

// Task 8

var obtMarks = 804;
var totalMarks = 980;

let percentageCalc = (obtMarks/totalMarks) * 100;

document.write("The total percentage is " + percentageCalc.toFixed(2) + '<br>')

// Task 9

let usDollar = 10;
let sdRiyal = 25;

document.write(`The total currency in PKR is   ${(usDollar*104.80)+(sdRiyal*28)} <br>`)


// Task 10

let myNum = 7;
let myResult = ((myNum+5)*10)/2;

document.write("Single expression result is " + myResult)

// Task 11

var dob = new Date("06/24/2008");  
    //calculate month difference from current date in time  
    console.log(dob.getTime())
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);  
      
    //display the calculated age  
    document.write("Age of the date entered: " + age + " years <br>"); 


    // Task 12

    let radius = 20;
    let CalcCircum = 2 * 3.14 * radius;

    let areaofCircle = 3.14 * Math.pow(radius,2);

    document.write("The Area of Circle is " + areaofCircle + "<br>");
    document.write("The CalcCircum is " + CalcCircum + "<br>")

    // Task 13

    let mySnack = "Cheetos";
    let myAge = 23;
    let maxAge = 75;
    let estValue =2;
    let calcTotal = estValue * (maxAge - myAge)

    document.write(`You will need ${calcTotal} to last you until the ripe old age of ${maxAge}`)




