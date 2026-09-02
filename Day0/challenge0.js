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
let n1 = 10 , n2 = 0;
let operator = "+";
switch (operator) {
  case "+":
    console.log(n1 + n2);
    break;
  case "-":
    console.log(n1 - n2);
    break;
  case "*":
    console.log(n1 * n2);
    break;
  case "/":
    if (n2 === 0) {
      console.log("Indivisible par zero");
    } else {
      console.log(n1 / n2);
    }
    break;
  default:
    console.log("Erreur");
}
   
// Valid triangle

let agl1 = 60,  agl2 = 60, agl3 = 60;

let somme = agl1 + agl2 + agl3;

if (agl1 > 0 && agl2 > 0 && agl3 > 0 && somme === 180) {
  console.log("triangle");
} else {
  console.log("Pas un triangle");
}


//BMI Calculator 

let weight = 65 , height = 1.65 ;

let bmi = weight / (height * height);

if (bmi < 18.5) {
  console.log("BMI : ", bmi, " underweight");
} else if (bmi <= 24.9) {
  console.log("BMI : ", bmi, " normal");
} else {
  console.log("BMI : ", bmi, " overweight");
}
