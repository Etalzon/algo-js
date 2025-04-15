
//========= VÉRIFIE SI UN PALINDROME ========//
/** fonction déclaré(palindrome) paramètre(mot) */
function Palindrome(mot) {

    /** variable déclaré(motInverse) égal paramètre du nom de la fonction(mot).divise(split) une chaîne de caractères ("entre guillemet vide").
     *  (reverse)inverse une chaîne de caractères (sans guillemet vide).
     *  (join)joindre une chaîne de caractères ("entre guillemet vide"); */
    let motInverse = mot.split('').reverse().join('');

    /** (si)condision (paramètre de la fonction(mot) égal a variable déclaré(motInverse)) */
    if (mot === motInverse) {

        /** retourne(vrais)si un palindrome. */
        return true; 

    /** condition(sinon). */
    } else {

        /** retourne(faut)pas un palindrome. */
        return false;
    }
}
/** je log le nom de la fonction pour trié la chaine de caractère que j'écris. */
console.log(Palindrome("radar"));
console.log(Palindrome("voiture"));
console.log(Palindrome("sos"));
console.log(Palindrome("taxi"));
