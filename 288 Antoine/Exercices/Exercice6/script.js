/* function carre(x){
    return x * x;
}
const carre2 = (carre) => carre * carre ;
console.log(carre2(0));
console.log(carre2(2));
console.log(carre2(5));
console.log(carre2(10)); */

/* function min(nombre1, nombre2){
    if(nombre1 > nombre2){
        return nombre2;
    }else if(nombre1 < nombre2){
        return nombre1;
    }else if (nombre1 === nombre2){
        return nombre1;
    }
}
console.log(min(4.5, 5));
console.log(min(19, 9));
console.log(min(5, 5));
 */

const min2 = (nombre1, nombre2) => { 
    if(nombre1 > nombre2) 
          return nombre2; 
        else
          return nombre1;
    }
console.log(min2(4.5, 5));
console.log(min2(9, 9));
console.log(min2(5, 5)); 

// Calculatrice de base 
/* function calculer(nombre1, operateur, nombre2){
switch (operateur){
    case "+":
        return nombre1 + nombre2;
        break;
    case "-":
        return nombre1 - nombre2;
        break;
    case "*":
        return nombre1 * nombre2;
        break;
    case "/":
        return nombre1 / nombre2;
        break;
    default:
    }
}
console.log(calculer(4, "+", 6));
console.log(calculer(4, "-", 6));
console.log(calculer(2, "*", 0));
console.log(calculer(12, "/", 0));
 */

/* let etoile = prompt("Svp inserez le nombre de chiffre que vous allez afficher");
for(i= 0; i <= 10; i++){
    etoile += "*";
    document.write(etoile + "<br>");
} */

/* function etoile(){
let nombreDetoile = Number(prompt("Svp inserez le nombre de chiffre que vous allez afficher"));
    let etoile = "*";    
    for(let i=0; i<=nombreDetoile; i++){
        document.write(etoile + "<br>");
        etoile += "*";
    }
}
etoile();
 */

