//FizzBuzz
for (let i=1; i<=50 ;i++){
    if(i%3===0 && i%5===0)
        console.log("FizzBuzz")
    else if(i%3===0){
        console.log("Fizz")
    }else if(i%5===0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}
/* Output 
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
Buzz
Fizz
37
38
Fizz
Buzz
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
Buzz */




// Count vowels 
let texte = "visual studio"
let compteur=0 
for (i=0; i< texte.length ; i++){
    if ( texte[i]=== "a" ||
         texte[i]=== "e" ||
         texte[i]=== "i" ||
         texte[i]=== "o" ||
         texte[i]=== "u"
    ) {
        compteur++;
    }
}
console.log(compteur);

// 6


// Square of Stars 
for(let ligne = 0 ; ligne < 5 ;ligne++){
    let resultat = "";
  for(let cologne =0 ; cologne < 5 ;cologne++){
resultat += "*"
}
console.log(resultat);
}
/* Output 
*****
*****
*****
*****
*****       */



