/* const temperature = 55;
if(temperature <= 0){
    document.write("Il gèle! </br>");
}
else{
    document.write("Il ne fait pas si froid </br>");
} */

/* const formule = "abracadabra";
if(formule === "abracadabra"){
    document.write("C'est la formule magique <br>");
}
else{
    document.write("Ce n'est pas la bonne formule </br>");
}
 */

/*
const jourActuel = "lundi";
let jourSuivant = "";

if(jourActuel === "lundi"){
    jourSuivant = "mardi";
}else if (jourActuel === "mardi"){
    jourSuivant = "mercredi";
}else if(jourActuel === "mercredi"){
    jourSuivant = "jeudi";
}else if(jourActuel === "jeudi"){
    jourSuivant = "vendredi";
}else if(jourActuel === "vendredi"){
    jourSuivant = "samedi";
}else if(jourActuel === "samedi"){
    jourSuivant = "dimanche";
}

if(jourSuivant !== ""){
    document.write(`Demain, nous serons ${jourSuivant}<br>`);
} 

*/
/* 

const moyenne = 12;
if (moyenne < 10){
    document.write("Il est racalé");
}
else if(moyenne >= 10 && moyenne < 12){
    document.write("Il est reçu");
}
else if(moyenne >= 12){
    document.write("Il est reçu avec mention");
}

 */

/* 
let heure = 12;
let minutes = 30;
let secondes = 59;

if (heure >= 0 && heure <= 23 && minutes >= 0 && minutes <= 59 && secondes >= 0 && secondes <= 59) {
    secondes++;
    if (secondes === 60) {
        secondes = 0;
        minutes++;
    } if (minutes === 60) {
        minutes = 0;
        heure++;
    } if (heure === 23) {
        heure = 0;
    }
  console.log(secondes);
}

else {
    console.log("Erreur: heure incorrecte")
}


 */

/* let age = Number(prompt("Entrez votre age :"));

if (age < 20) {
  let ecoleObligatoire = confirm(
    "Etes vous à l'école obligatoire (OK ou annuler) :"
  );
  if (ecoleObligatoire) {
    console.log("Vous avez droit à une entrée gratuite");
  } else {
    console.log("Vous devez payer 10.-");
  }
} else {
  if (age > 60) {
    let activite = confirm("Etes vous en activité (OK ou Cancel) :");
    if (activite) {
      console.log("Vous devez payer 15.-");
    } else {
      console.log("Vous avez droit à une entrée gratuite");
    }
  } else {
    let activite = confirm("Etes vous en activité (OK ou Cancel) :");
    if (activite) {
      console.log("Vous devez payer 20.-");
    } else {
      let etudiant = confirm("Etes vous étudiant (OK ou Cancel) :");
      if (etudiant) {
        console.log("Vous devez payer 15.-");
      } else {
        console.log("Vous devez payer 10.-");
      }
    }
  }
} */

// The same exercice with switch method
switch (prix) {
  case 0:
    console.log("Vous avez droit à une entrée gratuite");
    break;
  case 10:
    console.log("Vous devez payer 10.-");
    break;
  case 0:
    console.log("Vous devez payer 15.-");
    break;
  case 0:
    console.log("Vous devez payer 20.-");
    break;
  default:
    console.log("Il y a un bug !");
}
