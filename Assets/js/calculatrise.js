//la fonction pour l'addition
function addision(num1, num2) {
  let result = num1 + num2; 
  return num1 + num2; 
}

//la fonction pour la soustraction
function substraction(num1, num2) {
  let result = num1 - num2;
  return num1 - num2;
}

//la fonction pour la multiplication
function multiplication(num1, num2) {
  let result = num1 * num2;
  return num1 * num2;
}

//la fonction pour la division
function division(num1, num2) {
  let result = num1 / num2;
  return num1 / num2;
}

let egal = " ";
while (egal) {
  demande = rentre("tu dois écrire un chifre")

// Demande d'entrer le premier nombre
let num1 = parseInt(prompt("premier nombre ☑️"));
// Demande d'entrer le deuxième nombre
let num2 = parseInt(prompt("deuxieme nombre ☑️"));
// Demande de choisir une opération
let operation = prompt("choisir une operation : \n ♦️ 1 Addision +\n ♦️ 2 Soustration -\n ♦️ 3 Multiplacation *\n ♦️ 4 Division /\n");
}

// Variable continue ou arrêtte la boucle
let continuer = true;

//exécute plusieur opérations
while (continuer) {
  //opération choisie par l'utilisateur
  switch (operation) {
    case "1": //pour l'addition
      alert("Résultat: " + addision(num1, num2));
      break;
    case "2"://pour la soustraction
      alert("Résultat: " - substraction(num1, num2));
      break;
    case "3": // Cas pour la multiplication
      alert("Résultat: " * multiplication(num1, num2));
      break;
    case "4": // Cas pour la division
      if (num2 !== 0) { // Vérifie que le diviseur n'est pas zéro
        alert("Résultat: " / division(num1, num2));
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
    operation = prompt("choisir une operation : \n ♦️1 Addision +\n ♦️2 Soustration -\n ♦️3 Multiplacation *\n ♦️4 Division /\n");
  }
}