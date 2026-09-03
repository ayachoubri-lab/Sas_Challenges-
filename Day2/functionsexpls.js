// 'largeur' et 'hauteur' sont les PARAMÈTRES
function calculerAire(largeur, hauteur) {
  console.log(largeur * hauteur);
}

// 5 et 10 sont les ARGUMENTS passés à la fonction
calculerAire(5, 10); // Affiche : 50


// return renvoie la valeur au reste du programme + stop l'éxecution 
// sans return la fct renvoie undefined 
function Majeur(age) {
    if (age>=18){
        return true ; // la fct s'arrt ici si la cond est vrai 
    }
    return false ; // soit disant else 
}
let autorisee =Majeur(16);
console.log(autorisee); 


// Anonymous Functions 
const saluer= function(nom){ //anonyme stockée dans une variable
    return "Bonjour"+ nom ;
}

console. log(saluer(" Aya"));



// Fonction anonyme utilisée comme callback dans un tableau
const nombres = [1, 2, 3];
nombres.forEach(function(n) {   // .foreach est une fct parcour un tab element par element comme boucle
//   prend en parametre une autre fct "fct callback"
  console.log(n * 2);
});

// on ecrit plutot un fct flechee "arrow fct " (m exemple)
const nombre = [1,2,3];
nombre.forEach((n)=> {
console.log(n*2);
});   
