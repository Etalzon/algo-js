/* ==========TRIE UN TABLEAU DE NOMBRE PAR ORDRE CROISSANT ========== */

/* fonction déclaré(triBulles) paramètre(tableau) */
function triABulles(tableau) {
    /* variable déclarer(number) est egal a paramètre de la fonction(tableau).longueur */
    let number = tableau.length;
    
    /* boucle(pour) (nom de la variable1 inventer(i) est egal a 0; 
    la variable1 inventer(i) est inferieur au nom de la variable déclarer(number) moin 1; 
    nom de la variable1 inventer(i) + 1) */
    for (let i = 0; i < number - 1; i++) {

        /* boucle(pour) (nom de la variable2 inventer(j) est egal à 0;
         la variable2 inventer(j) est inferieur au nom de la variable déclarer(number) moin la variable1 inventer(i) moin 1; 
         la variable2 inventer(j) + 1) */
        for (let j = 0; j < number - i - 1; j++) {

            /* (si)condision (paramètre de la fonction(tableau)et de la variable2 inventer en tableau[j]
             est supérrieur au paramètre de la fonction(tableau) et de la variable2 inventer en tableau[j + 1]) */
            if (tableau[j] > tableau[j + 1]) {

                /* variabla déclarer(temp) egal a paramètre de la fonction(tableau) et de la variable2 inventer en tableau[j];
                 paramètre de la fonction(tableau) et de la variable2 inventer en tableau[j] est egal a la variable2 inventer en tableau[j + 1];
                 paramètre de la fonction(tableau) et de la variable2 inventer en tableau[j + 1] est egal variabla déclarer(temp) */
                let temp = tableau[j];
                tableau[j] = tableau[j + 1];
                tableau[j + 1] = temp;
            }
        }
    }
    /* retoune paramètre de la fonction(tableau) */
    return tableau;
}
// je log le nom de la fonction pour trié un tableau que j'écris.
console.log(triABulles([75, 100, 8, 24, 2]));
