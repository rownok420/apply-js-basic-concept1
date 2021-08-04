console.log('Now We are Apply Our Javascript Concept');

//********************/ Unit convrt********************** //

/*
// inch to feet 
function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}
// input from user 
var inches = parseFloat(prompt('Enter your inches :'));
var userInches = inchToFeet(inches);
console.log('User inches in : '+userInches);

var myInches = inchToFeet(144)
console.log(myInches);

var naniInches = inchToFeet(256);
console.log(naniInches);

var dadiInches = inchToFeet(300);
console.log(dadiInches);

// Mile to Kilometer 
function mileToKilometer(miles){
    var km = miles * 1.60934;
    return km
}

var marathon = mileToKilometer(26.2);
console.log('Marathon to kilometer : '+marathon);
*/


//**************** Even and Odd Number Using function ****************//

/*
// with if-else
var num = parseFloat(prompt('Enter a number :'));
if(num % 2 == 0){
    console.log('This number in even number.')
}else{
    console.log('This number is odd number.')
}

// with function 
function evenAndOddNumber(number){
    if(number % 2 == 0){
        console.log('This number is Even number.')
    }else(
        console.log('This number is Odd number.')
    )
}
var myNumber = evenAndOddNumber(14)
console.log(myNumber);

// input from user 
var userNumber = parseFloat(prompt('Enter your number : '));
var calc = evenAndOddNumber(userNumber);
console.log(calc)
*/


//******************/ Leap Year /**********************//

/*
// with if-else 

var year = parseFloat(prompt('Enter your year :  '));
if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
    console.log('This year is Leap year')
}else(
    console.log('This year is not Leap year')
)

// with function 

function leapYear(year){
    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
    console.log('This year is Leap year')
    }else(
    console.log('This year is not Leap year')
    )
}

console.log(leapYear(2020));
console.log(leapYear(2021));

var userYear = parseInt(prompt('Enter your year :'));
var calcYear = leapYear(userYear);
console.log(calcYear);
*/


//******************* */ Factorial /* *********************//

/*
// using for loop 

var factorialNumber = parseFloat(prompt('Enter your number : '));
var factorial = 1;
for(var i = 1; i <= factorialNumber; i++){
    console.log(i);
    factorial = factorial * i;
}
console.log(factorial);



// using function 

function getFactorial(number){
    var factorial = 1;
    for(var i = 1; i <= number; i++){
        console.log(i);
        factorial = factorial * i;
    }5
    return factorial;
}

var firstFactorial = getFactorial(5);
console.log(firstFactorial);

var secondFactorial = getFactorial(6);
console.log(secondFactorial);

var userFactorial = parseFloat(prompt('Enter your number : '))
var fact = getFactorial(userFactorial);
console.log(fact)



// using while loop 

var factorial = 1;
var i = 1;
while(i <= 5){
    console.log(i);
    factorial = factorial * i;
    i++;
}
console.log(factorial);

function getFactorial(number){
    var factorial = 1;
    var i = 1;
    while(i <= number){
        console.log(i);
        factorial = factorial * i;
        i++;
    }
    return factorial
}

console.log(getFactorial(5))


// decrementing loop 

function getFactorial(number){
    let factorial = 1;
    for(let i = number; i >= 1 ; i--){
        console.log(i)
        factorial = factorial * i;
    }
    return factorial
}

var firstFactorial = getFactorial(5);
console.log(firstFactorial);

function getFactorial(number){
    let factorial = 1 ;
    let i = number;
    while(i>=1){
        console.log(i)
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

var firstFactorial = getFactorial(5);
console.log(firstFactorial);
*/



//******************** calculate factorial in a recursive function *******************//

/*
function factorial(n){
    if(n == 1){
        return 1 ;
    }
    return n * factorial(n - 1);
}

console.log(factorial(4))
*/


//************************ temperatuer converter **********************//


/*
// Fahrenheit to Celsius 

var f = parseFloat(prompt('Enter your Fahrenheit temperature :'));
var c = (f-32) * (5/9);
console.log(c);

// Celsius to Fahrenheit 

var c = parseFloat(prompt('Enter your Celsius temperature :'));
var f = (c * 9/5) + 32;
console.log(f);

// with function 

var userTemp = parseFloat(prompt('Enter your Fahrenheit temperature : '));
function fToc(f){
    var c = (f-32) * (5/9);
    console.log(c);
}

var calculateTemperature = fToc(userTemp);
console.log(calculateTemperature);
*/


//************************ Letter grade ***********************//

/*
var result = parseFloat(prompt('Enter your Result : '));

if(result >= 80 && result <= 100){
    console.log('A+');
}else if(result >= 70 && result <= 79){
    console.log('A');
}else if(result >= 60 && result <= 69){
    console.log('A-');
}else if(result >= 50 && result <= 59){
    console.log('B');
}else if(result >= 40 && result <= 49){
    console.log('C');
}else if(result >= 33 && result <=39){
    console.log('D');
}else if(result < 1 || result > 100){
    console.log('This is not a valid number');
}else{
    console.log('Fail');
}
*/


//********************* simple interest formula *****************//

/*
 function simpleInterent(P,R,T){           // P	=initial principal balance
    var myInterest = (P*R*T) / 100;        // R = annual interest rate
    console.log(myInterest);               // T = time in year
}

console.log(simpleInterent(50000,5,2));
*/