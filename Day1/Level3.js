// prime numbers 
let num = 2 ;
for (num=2; num <=50 ; num++){
    let primeNum =true ;
    let div = 2;
    
while (div < num) {
    if (num % div === 0) {
      primeNum = false; 
      break;
    }
    div = div + 1;
  }

if(primeNum){
console.log(num);
}
}
/*
2
3
5
7
11
13
17
19
23
29
31
37
41
43
47 */

// Right-Angled Triangle: 
let L = 1;

for (L = 1; L <= 5; L++ ) {
  let R = "";
  let C = 1;

  for (C = 1; C <= L; C++) {
    R += "*";
  }
  console.log(R);
}
 
/* output 
*
**
***
****
*****      */


// Fibonacci Sequence 
let E1 =0 , E2 =1 
for( i=0 ; i<10 ; i++) {
console.log(E1)
let s= E1 + E2 ;
E1 = E2 ;
E2 = s ; 
}