function isPalindromeLoop(str){
    const reverse = str.split("").reverse().join("");
return str==reverse ;

}
console.log(isPalindromeLoop("kayak")); //true
console.log(isPalindromeLoop("Flawless"));// false



// string reversal 4
function reverseString(strInverse){
    let output =""   
for(let i=strInverse.length-1;i>=0 ;i--){
    output += strInverse[i] ;
}
return output;
}
console.log(reverseString("JAVASCRIPT"));
//TPIRCSAVAJ




//Character Counter:
function countChar(str, char){
    let count=0;
    for(let i=0 ;i<= str.length;i++ ){
        if (str[i]===char){
            count++;
        }
    }
    return count;
}
console.log(countChar("vscode","o")); //1

