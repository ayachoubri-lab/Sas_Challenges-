function isUp(str){
    let upUP="";
    for(let i=0;i<str.length;i++){
        if(i==0 ||(str[i-1]==" " && str[i] !=" ")){
            upUP += str[i].toUpperCase()
            i++
        }
        upUP += str[i];
    }
    return upUP ;
}
console.log(isUp("hello world"))
//Hello World
 


//String Compressor:
function copStr(str){
    let result ="";
    let count =1 ;
    for (let i=0;i<str.length;i++){
        if (str[i] === str[i +1]){
         count++ ;
        } else {
            result += str[i] + count ;
            count = 1;
        }
    }
    
  return result ;
}
console.log(copStr("aaabbc"));



//Anagram Checker: 
function isSorted(s1,s2){
    if (s1.length !== s2.length)
    return false ;

    const sorted1 = s1.split("").sort().join("");
    const sorted2 = s2.split("").sort().join("");
    return sorted1 === sorted2 ;
}

console.log(isSorted("listen","silent"));