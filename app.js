let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */

const body = document.querySelector('body')

function place (array){
    let div = document.createElement("div")
    div.innerHTML = array.join(" ")
    body.appendChild(div)
}

let tableauUnDeux = tableauUn.map(item => item ** item);
place(tableauUnDeux);
let tableauUnTrois = tableauUn.map(item => item * 10);
place(tableauUnTrois);
let tableauUnQuatre = tableauUn.map(item => (item + 2) / 21);
place(tableauUnQuatre);
let tableauUnCinq = tableauUn.filter(item => item > 2);
place(tableauUnCinq);
let tableauUnSix = tableauUn.filter(item => item % 2);
place(tableauUnSix);
let tableauUnSept = tableauUn.filter(item => item * 3 > 10);
place(tableauUnSept);

let tableauDeuxDeux = tableauDeux.map(item => item.length);
place(tableauDeuxDeux);
let tableauDeuxTrois = tableauDeux.map(item => [item, item.length]);
place(tableauDeuxTrois);
let tableauDeuxQuatre = tableauDeux.map(item => item + item);
place(tableauDeuxQuatre);
let tableauDeuxCinq = tableauDeux.filter(item => item.length > 2 + 2);
place(tableauDeuxCinq);
let tableauDeuxSix = tableauDeux.filter(item => item.length % 2 === 0);
place(tableauDeuxSix);
let tableauDeuxSept = tableauDeux.filter(item => item.length -3 > 10);
place(tableauDeuxSept);