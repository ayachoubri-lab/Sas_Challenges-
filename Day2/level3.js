// Math Callback: 
function calculate(a, b, operation){
    console.log(operation(a,b));
}
const add = (a,b)=> {
    return (a + b) ;
}
 const sou = (a,b)=> {
    return (a - b) ;
 }
calculate (19,6,add);
   

//Closure Intro: 
function createMultiplier(multiplier) {
 const numb = () => {return multiplier * multiplier}
 return numb();
 }
console.log(createMultiplier(9));

//Custom Filter Outline:
function filterOddNumbers(arr, callback) {
  console.log(callback(arr));
} 
let checkOdd = (array) => {
    if (array % 2 !== 0 ) {
        return
    }
}
