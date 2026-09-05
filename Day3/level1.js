function lengthAndUppercase(str){
console.log(str.length);
console.log(str.toUpperCase());
}
let texte="hello world";
lengthAndUppercase(texte);


// f and l
function firstAndLast(sTR){
    if (sTR.length===0){
      console.log("vide");
      return;
    }
        let first= sTR[0];
        let last=sTR[sTR.length-1];
        console.log(first);
        console.log(last);
    }
firstAndLast("HELLO WORLD")


//Word Replacer:
const phrase =("I love apples");
const newPhrase = phrase.replace("apples","bananas");
console.log(newPhrase);