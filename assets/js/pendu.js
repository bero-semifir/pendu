// Récup des élements DOM
const motCache = document.querySelector("#motCache");
const formulaire = document.querySelector("form");
const lettreInput = document.querySelector("#lettre");
const tentatives = document.querySelector("#tentatives");
const message = document.querySelector("#message")

// Variables pour la logique du pendu
const motATrouver = "Poulet".toLowerCase().split("");
//remplissage d'un tableau avec des étoiles
let progresMot = Array(motATrouver.length).fill("_");
let lettreTentees = [];
let victoire = false;

// logique du pendu

/**
 * Vérifier si la lettre entrée par l'utilisateur est dans le mot à trouver
 */
function deviner(){
    let positions = [];
    // Trouver les positions de la lettre de l'utilisateur dans le mot
    for (let i = 0; i < motATrouver.length; i++) {
        if(lettreInput.value.toLowerCase() == motATrouver[i]){
            positions.push(i);
        }
    }

    // si au moins une lettre a été trouvée
    if(positions.length > 0){
        positions.forEach(position => {
            progresMot[positions] = motATrouver[positions];
        })
        motCache.innerText = progresMot.join("-");
    }else {
        // sinon, on met la lettre dans le tableau de lettres tentées
        lettreTentees.push(lettreInput.value.toLowerCase());
        tentatives.innerText = lettreTentees;
    }
    console.log({positions, motATrouver, progresMot});
    lettreInput.value = "";
    if(lettreTentees.length >= 9){
        message.innerText = "Vous avez perdu";
        reset();
    }
    victoire = progresMot.every((lettre, index)=>{
        return motATrouver[index] == lettre;
    })
    if(victoire){
        message.innerText = "Vous avez gagné";
        reset();
    }
}

function reset(){
    progresMot = Array(motATrouver.length).fill("_");
    motCache.innerText = progresMot.join("-");
    lettreTentees = [];
    tentatives.innerText = "";    
}

window.addEventListener("load", reset);
formulaire.addEventListener("submit", (event)=>{
    event.preventDefault();
    deviner();
});