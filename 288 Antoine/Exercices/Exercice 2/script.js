{
      //Affiche le nom es l'age
      
      var nom = "AHMADI";
      var age = 25;
      console.log( nom+" est "+ age);
      
      var num1 = 6;
      var num2 = 3;
      console.log(num1 + num2);
      console.log(num1 - num2);
      console.log(num1 * num2);
      console.log(num1 / num2);
      console.log(num1 % num2);

      console.log(4 + 5);
      console.log("4 + 5");
      console.log("4" + "5");
    }
      
{
      let a = 2;
      a -= 1;
      a++;
      let b = 8;
      b += 2;
      const c = a + b * b;
      const d = a * b + b;
      const e = a * (b + b);
      const f = a * b / b;
      const g = a / b * b;
      console.log(a,b,c,d,e,f,g);

      //Température
      const tempCel = 37.1;
      const resultat = tempCel * 9/5 + 32;
      //\xB0C est pour afficher => °  
      console.log(tempCel + '\xB0C = ' + resultat +  '\xB0F');
    }
{
      //Pérmutations
      let nombre1 = 5;
      let nombre2 = 3;

      const nombre3 = nombre1;
      nombre1 = nombre2;
      nombre2 = nombre3;

      console.log(nombre1);
      console.log(nombre2); 
    }
{
      let nombre1 = 5; //7
      let nombre2 = 7;  //9
      let nombre3 = 9;  //5
      const nombre4 = nombre1;
      nombre1 = nombre2;
      nombre2 = nombre3;
      nombre3 = nombre4;
      console.log(nombre1, nombre2, nombre3); 
    }