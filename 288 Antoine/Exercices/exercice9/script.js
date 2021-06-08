function compterVoyelles(voyelles){
  let total = 0;
    for(let i = 0; i < voyelles.length; i++){
      switch(voyelles[i].toLowerCase()){
        case "a":
        case "e":
        case "i":
        case "u":
        case "o":
            total +=1;
            break;
        }
  }
  return total;
}
console.log(compterVoyelles("RadAr"));
console.log(compterVoyelles("Tic et Tac"));
console.log(compterVoyelles("Oasis Oasis Oh"));