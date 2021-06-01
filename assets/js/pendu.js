// Récup des élements DOM
const motCache = document.querySelector("#motCache");
const formulaire = document.querySelector("form");
const lettreInput = document.querySelector("#lettre");
const tentatives = document.querySelector("#tentatives");

// Variables pour la logique du pendu
const motATrouver = "Poulet".toLowerCase().split("");
//remplissage d'un tableau avec des étoiles
let progresMot = Array(motATrouver.length).fill("_");
let lettreTentees = [];

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
    }
    console.log({positions, motATrouver, progresMot});
    lettreInput.value = "";
}


function reset(){
    
    motCache.innerText = progresMot.join("-");
    lettreTentees = [];
}


window.addEventListener("load", reset);
formulaire.addEventListener("submit", (event)=>{
    event.preventDefault();
    deviner();
});