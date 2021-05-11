{
//window.alert("Its good");
}
{

//let nom = window.prompt("Inter your name");
//document.write(nom);
}
{
  //window.confirm("ça confirme");
}
{
  //document.writeln("Le résultat directement dans une page1</br>");
  //document.write("Le résultat directement dans une page");
}
{

  /*
  let message = "Bonjour tout le monde! \n comment ça va?";
  alert(message);
  */
}
{
  
//  const prenom = prompt("Votre nom");
//  alert(`Bonjour monsieur ${prenom} \nBienvenu chez nous!`)
//  document.write(`Bonjour monsieur ${prenom} <br> Bienvenu chez nous!`);
}
{
  let nombreArticle = Number(prompt("Nombre d'article"));
  let prixUnitaire = Number(prompt("Entrez le prix unitaire"));
  let tva = nombreArticle * prixUnitaire / 100 * 8;
  let prixTotal = nombreArticle * prixUnitaire + tva;
  document.write(prixTotal);
 
}