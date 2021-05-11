
/*

Exercice 5.1

const nbTours = 10;
console.log("Le manège démarre");

for(let nbTours = 1; nbTours <= 10; nbTours++){

    console.log("Le manège s'arrête " + nbTours);
}
console.log("Le manège s'arrête")



 */

/* 

Exercice 5.2 

*/
/* 
const nombre = prompt("Svp inserez un chiffre : ");


for(let i= 1 ; i < 10; i++){
    let resultat = nombre * i;
    document.write(` ${nombre} ` + " * " +i+ " = " + resultat +"<br>");
}

 */
/* 

Exercice 5.3 

*/

/* for(i = 1 ; i < 100 ; i++){

    if(i%3 === 0 && i%5 === 0){
        document.write("FizzBuzz");
    }else if(i % 3 === 0){
        document.write("Buzz");
    }else if(i % 5 === 0){
        document.write("Fizz");
    }else{
        document.write(i);
    }
    document.write("<br>");
}  */

/* 

Exercice 5.4 

*/
/* 
let etoile = "";
for(i = 0; i <= 10; i++){
    etoile += "*";
    document.write(etoile +"</br>");
}
etoile = "*";
for(i= 0; i<= 10; i++){

    document.write(etoile+"<br>");
    etoile = "&nbsp;&nbsp;" + etoile;
}
 */

/* 

Exercice 5.6 

*/
let nombreSaisi = prompt("Saissiz un nombre entre 0 et 100");
let solution = Math.round(Math.random() * 100);

while (nombreSaisi != solution){
    if(nombreSaisi < solution){
        nombreSaisi = prompt("Le nombre saisi est moins grand \n");
    }else if(nombreSaisi > solution){
        nombreSaisi = prompt("Le nombre saisi est plus grand \n");
    }
    else{
        alert("Bravo");
    }
}
