/* const heros = {
    nom : "Aurora",
    sante : 150,
    force : 25,
    xp : 0,

    decrire(){
        return `${this.nom} a ${this.sante} points de vie, ${this.force} en froce et ${this.xp} points d'expérience`;
    }
};
console.log(heros.decrire());

console.log("Aurua apprend une nouvelle compétence");

heros.xp += 15;

console.log(heros.decrire()); */


/* const chien = {
    nom: "Crockdur",
    race: "mâtin de Naples",
    taille: 75,

    aboyer(){
        return "Grrr ! Grrr !";
    }
    
};
console.log(
    `${chien.nom} est un ${chien.race} mesurant ${chien.taille} cm`
);


console.log(`Tiens, un chat ! ${chien.nom} aboie : ${chien.aboyer()}`);
 */


const compte = {
    titulaire: "Alex",
    solde: 0,
    crediter(montant){
        this.solde += montant;
    },
    debiter(montant){
        this.solde -= montant;
    },
    decrire(){
        console.log(`Tituliare : ${this.titulaire}, solde: ${this.solde}`);
    }
};

compte.decrire();
compte.crediter(250);
compte.debiter(80);
compte.decrire();