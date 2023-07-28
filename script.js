function fibonacci(n) {
    let sequence = []; // Crée un tableau vide pour stocker la séquence de Fibonacci

    for (var i = 0; i < n; i++) { // Boucle qui s'exécute n fois pour générer n termes de la séquence
        if (i <= 1) { // Si l'indice est 0 ou 1, les deux premiers termes de la séquence sont 0 et 1
            sequence.push(i); // Ajoute l'indice à la fin du tableau sequence
        } else {
            let a = sequence[i - 1]; // Récupère le terme précédent dans le tableau sequence
            let b = sequence[i - 2]; // Récupère le terme précédent du terme précédent dans le tableau sequence
            sequence.push(a + b); // Ajoute la somme des deux termes précédents à la fin du tableau sequence
        }
    }
    return sequence; // Retourne le tableau sequence contenant la séquence de Fibonacci générée
}
let result = fibonacci(10); // Appelle la fonction fibonacci pour générer les 10 premiers termes de la séquence
console.log(result); // Affiche le résultat dans la console