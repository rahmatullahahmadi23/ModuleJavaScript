/* let mousquetaires = [
    "Athos",
    "Porthos",
    "Aramis",
]; */
// console.log("Voici les quetres mousquetaires")
/* for (let i = 0; i< mousquetaires.length; i++) {
    console.log(mousquetaires[i]);

} */

// Il y a deux méthodes pour ajouter un élément dans le tableaux

/* mousquetaires.push("D'Argagnan");
mousquetaires.forEach((mousquetaire) => {
    console.log(mousquetaire);
});
 */
/* mousquetaires[mousquetaires.length] = "D'Argagnan"; 

console.log("Le pauvre Aramis est mort...");
mousquetaires.splice(2, 1);

for (let mousquetaire of mousquetaires){
    console.log(mousquetaire);
} */

// exercice 8.2
/* const nombres = [11, 3, 7, 2, 9, 10];
let total = 0;

nombres.forEach((nombre) => {
    total = total + nombre;
});
console.log(total); */

// exercice 8.3
const valeurs = [3, 22, 7, 2, 9, 10];
let max = 0;
for(let i = 0; i < valeurs.length; i++){
    if(max < valeurs[i]){
        max = valeurs[i];
    }
}
console.log(max);