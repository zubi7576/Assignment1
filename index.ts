//Assignment One 
// Question No 1 
// Program to calculate  the are of rectangle
let lth:number = 4;
let wid:number = 5;
let areaofrectangle:number;

areaofrectangle  = lth*wid;
console.log("Area of Rectangle is",areaofrectangle);


//Question no 2
//: Write a program that takes input and calculates the volume of a cube
 
let cube:number = 4;
 let volumeofcube:number;

 volumeofcube = cube*cube*cube;

 console.log("volume of cube is",volumeofcube);


 //Question no 3
 //Write a program that checks if a given number is positive, negative, or zero

 let a:number = 5;

 if (a>0)
 {
    console.log("Given number is positive",a)
 }
 else if(a<0)
 {
    console.log("Given number is negative",a)
 }
 else
 {
    console.log("Given number is zero",a)
 }


 //Question no 4
 // write a program that checks if a given number is even or odd
 let num:number = 4;
 if (num %2 ==0)
 {
    console.log("Given Number is even",num)
 }
 else
 {
    console.log("Given  Number is Odd",num)
 }

 //Question no 5
 //Write a program that determines if a person is eligible to vote based on their age.

 let age:number = 18;
 if(age>=18)
 {
    console.log("Person is eligible to vote",age)
 }
 else
 {
    console.log("Person is not eligible to vote",age)
 }


 //Question no 6
 //Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)
let n1:number = 10;
let n2:number = 5;
let n3:number = 3;
let n4:number = 2;
let n5:number = 4;
let n6:number = 7;
let result:number;

result = ((n1+n2) * n3-n4/(n5%n3)-7)
console.log("The result of the expression is ",result);




// //////////////////////////////////////////////// Assignment two//////////////////////////////////////////////////////////
//Question no 1
//Proggram to convert celsius to farenhite and vice versa///////////////////////
function temprature(a:number,b:number)
{
//let a:number //= 40;
//F = C×(9/5)+32
//(32°F − 32) × 5/9 = 0°C
var result1:number = a*(9/5)+32;
var result2:number = (b-32)*5/9;
console.log("Temprature from Celsius to farenhite is",result1);
console.log("Temprature from Celsius to farenhite is",result2);
}
temprature(40,40)

///////////////////////Question no 2///////////////////////////
////////////////////Program to calculate the percentage///////

function calculate()
{
    var a:number = 70;
    var total:number =  100;
    var result:number = 70/100*100;
    console.log("Percentage is ",result);
}
calculate()

//Question no 3///
//Program to calculate the no of weeks from days

let days:number = 17;
let weeks:number;

weeks = (days/7);
console.log("Number of weeks are",weeks)


//Question  no 4
//Write a program that calculates the discount for a product based on its price. 
//If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
let price:number = 100;
let discount:number;
if(price>=100)
{
    discount = price-(price*0.1);
    console.log("Price of product after discount of 10% is ",discount)
}
else
{
 discount = price-(price*0.05)
 console.log("Price  after discount of 5% is",discount)
}


//Question No 5//
// - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child."
// If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."

let user_age = 20;
if(user_age>=0 && user_age<=12)
{
    console.log("User is child")
}
else if(user_age>12 && user_age<=19)
{
    console.log("User is teenager")
}
else 
{
    console.log("User is adult")
}


//Question no 6
// Write a program that takes temperature and check it.
// If it is cold then suggest the user to wear warm clothes and so on according to the weather.

let temp:number = 45;
if (temp>=15)
{
    console.log("Weather is hot please take care of  your self")
}
else
{
    console.log("Weather is cold please take care of  your self")

}

///Question no 7
// Write a program that checks 
//if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
let num1:number = 15;
if(num1%3 ==0 || num1%5 == 0)
{
    console.log("Number is divisible by both 3 and 5")
}
else
{
    console.log("Number is not divided by 3 or 5")
}

//Question no 8
//
// - Write a program that checks if the given year is leap year or not.
 let year:number = 2020;
 if(year% 4 ==0)
 {
    console.log(year,"is leap year")
 }
 else
 {
    console.log(year,"is not leap year")
 }

 //Question no 9
 //Develop a program that determines the day of the week. Ask the user for a number (1-7) 
 //and use nested if statements to print the corresponding day's name.
 var givenDayOfWeek: number = 6;

 function getDayOfWeek(day: number): string {
     if (day === 1) {
       return `Given Day: ${day} is Monday`;
     } else if (day === 2) {
       return `Given Day: ${day} is Tuesday`;
     } else if (day === 3) {
       return `Given Day: ${day} is Wednesday`;
     } else if (day === 4) {
       return `Given Day: ${day} is Thursday`;
     } else if (day === 5) {
       return `Given Day: ${day} is Friday`;
     } else if (day === 6) {
       return `Given Day: ${day} is Saturday`;
     } else if (day === 7) {
       return `Given Day: ${day} is Sunday`;
     } else {
       return `Given Day: ${day} is Invalid input`;
     }
 }
 
 console.log(getDayOfWeek(givenDayOfWeek));



 //Q10: Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax 
 //if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax. 
 //Where the tax amount will be calculated by the amount of bill.
// Calculate the Amount of Total with Taxes

var totalConsumedUnits: number = 347;

function calculateTax(units: number): number {
    if (units > 500) {
      return units * 0.25;
    } else if (units > 200) {
      return units * 0.15;
    } else if (units > 100) {
      return units * 0.10;
    } else {
      return 0;
    }
}

console.log(`Tax Calculated for Concsume Units: ${totalConsumedUnits} is ${calculateTax(totalConsumedUnits)}`);




