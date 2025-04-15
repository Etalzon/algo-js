/* ========== CALCULATRISE EN JS (console uniquement) ========== */

//la fonction déclaré addition paramètre(num1, num2)
function addision(num1, num2) {
  // let result = num1 + num2; 
  return num1 + num2; 
}

//la fonction déclaré soustraction paramètre(num1, num2)
function substraction(num1, num2) {
  // let result = num1 - num2;
  return num1 - num2;
}

//la fonction déclaré multiplication paramètre(num1, num2)
function multiplication(num1, num2) {
  // let result = num1 * num2;
  return num1 * num2;
}

//la fonction déclaré division paramètre(num1, num2)
function division(num1, num2) {
  //variable déclarer(result) est egal a paramètre de la fonction(num1) divisé a la paramètre fonction(num2)
  // let result = num1 / num2;
  //retourne paramètre de la fonction(num1) divisé a la paramètre fonction(num2)
  return num1 / num2;
}

//test redemander si rien est écrit
let egal = " ";
while (egal == " ") {
  egal = prompt("tu dois écrire un chifre");
}
// Demande d'entrer un chiffre



// variable déclaré(num1) analyser en entier(parseInt) demande(prompt)"texte de la demande"
let num1 = parseInt(prompt("premier nombre ☑️"));
// variable déclaré(num2) analyser en entier(parseInt) demande(prompt)"texte de la demande"
let num2 = parseInt(prompt("deuxieme nombre ☑️"));
// variable déclaré(operateur) demande(prompt)"texte de la demande de choisir un opérateur"
let operateur = prompt("choisir une operation : \n ♦️ 1 Addision +\n ♦️ 2 Soustration -\n ♦️ 3 Multiplacation *\n ♦️ 4 Division /\n");


// Variable déclarer(continuer) est vrai(true)
let continuer = true;

// boucle(tant que) (nom de la variable1 déclaré(continuer) est vrai(true))
while (continuer) {

  //changer variable déclaré(operateur)
  switch (operateur) {
    // Cas selectionner pour l'opérateur(addition)1
    case "1": 
      // alert("texte: ") conquaténation de la fonction addition(les paramètre de la fonction(num1, num2))
      alert("Résultat: " + addision(num1, num2));
      //stop le code
      break;
    case "2"://pour la soustraction
      alert("Résultat: " - substraction(num1, num2));
      break;
    case "3": //pour la multiplication
      alert("Résultat: " * multiplication(num1, num2));
      break;
    case "4": //pour la division
      // condision(si) paramètre de la fonction "non égal strictement"Vérifie que le diviseur n'est pas zéro
      if (num2 !== 0) { 
        alert("Résultat: " / division(num1, num2));
      //sinon
      } else {
        alert("Division par zéro impossible."); //erreur si division par zéro
      }
      break;
    default: // si entre une opération invalide
      alert("Opération fause."); // erreur pour une opération invalide
  }

  // Demande de continuer
  continuer = confirm("Tu veux une autre opération ?");
  if (continuer) {
    // Redemande l'opération si l'utilisateur veut continuer
    num1 = parseInt(prompt("premier nombre"));
    num2 = parseInt(prompt("deuxieme nombre"));
    operateur = prompt("choisir une operation : \n ♦️ 1 Addision +\n ♦️ 2 Soustration -\n ♦️ 3 Multiplacation *\n ♦️ 4 Division /\n");
  }
}