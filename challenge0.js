// level 1:age logger 
const age = 22
console.log("you are "+ age +" years old")
// Output :you are 22 years old



//temperature Check 
let temperature = 26

if (temperature >30){
    console.log("It's hot outside!")
}else {
    console.log("The weather is nice.")
}
// Output : The weather is nice.



// Even or Odd 
let number = 12

if (number %2 === 0 ){
    console.log("the number is even.")
}else{  // si le reste est 1
    console.log("Odd number")
}
// Output : the number is even.


// Level 2 : Grading System
let score = 99

if (score >= 90 && score <= 100)
    console.log("A")
else if (score >=80 && score <90 ){
    console.log("B")
}else if(score >= 70 && score <=79){
    console.log("C")
}else{
    console.log("f")
}

// Max of three 
let num1 = 10 , num2 = 20 , num3 = 30 ;
if (num1 > num2 && num1 > num3)
    console.log(num1)
else if (num2 > num1 && num2 > num3) {
    console.log(num2)
}else{
    console.log(num3)
}
 

// leap Year Checker 
let year = 2026; 
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("leap year"); 
} else {
    console.log("not leap year"); 
}


// Level 3 : Basic Calculator 
let n1 = 2 , n2= 5 ;
let op ="+" ;
switch(op){
 case "+":
    console.log(n1+n2)
    break;
case "-":
    console.log(n1-n2)
    break;
}
