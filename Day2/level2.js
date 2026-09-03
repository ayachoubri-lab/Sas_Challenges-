
// Temperature Converter:
function celsiusToFahrenheit(c) {
  return (c * 9 / 5) + 32;
}

console.log(celsiusToFahrenheit(20));


//String Emptiness Check:
function isEmpty(str) {
  for(let i=0; i<str.length ;i++){
    if(str[i] != " " )
      return false ;
  }
  return true ;
}
console.log(isEmpty("       ")) ;


//Factorial Calculator:

function factorial(n){
  let R = 1;
  for(let i =2 ; i <= n; i++){
    R *= i ; 
  }
  return R ;
}
 console.log(factorial(6)) ;
