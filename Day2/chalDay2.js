//Afficher les nombres pairs
function afficherPaire(n){
    for(let i=1; i< n; i++){
        if(i%2==0)
         console.log(i);
    } 
    }
    console.log(afficherPaire(10));

    
//Compter les résultats pairs

function compterPairs(nbr1, nbr2) {
    let cont =0 ;
    for(let i=nbr1 ;i<=nbr2; i++){
      let sum = nbr1+nbr2+ i 
      if (sum%2 ===0){
      cont++;
      }
    }
    return cont++ ;
}
 console.log(compterPairs(3,8));
