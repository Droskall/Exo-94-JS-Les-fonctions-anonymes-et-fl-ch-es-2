let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */

let tableauUnFoisLuiMeme = document.createElement("div");
tableauUnFoisLuiMeme.innerHTML = (tableauUn.map((event) => event ** event)).toString();
document.body.append(tableauUnFoisLuiMeme);

let tableauUnFois10 = document.createElement("div");
tableauUnFois10.innerHTML = (tableauUn.map((event) => event * 10)).toString();
document.body.append(tableauUnFois10);

let tableauUnAjout2 = document.createElement("div");
tableauUnAjout2.innerHTML = (tableauUn.map((event) => (event + 2) / 21)).toString();
document.body.append(tableauUnAjout2);

let tableauUnPlusGrand = document.createElement("div");
tableauUnPlusGrand.innerHTML = (tableauUn.filter((event) => event > 2)).toString();
document.body.append(tableauUnPlusGrand);

let tableauUnDivPar2 = document.createElement("div");
tableauUnDivPar2.innerHTML = (tableauUn.filter((event) =>  (event % 2) === 0)).toString();
document.body.append(tableauUnDivPar2);

let tableauUnMultPar3 = document.createElement("div");
tableauUnMultPar3.innerHTML = (tableauUn.filter((event) =>  (event * 3) > 10)).toString();
document.body.append(tableauUnMultPar3);

let tableauDeuxLength = document.createElement("div");
tableauDeuxLength.innerHTML = (tableauDeux.map(event => event.length)).toString();
document.body.append(tableauDeuxLength);

let tableauDeuxLengthAndBase = document.createElement("div");
tableauDeuxLengthAndBase.innerHTML = (tableauDeux.map(event => event + event.length)).toString();
document.body.append(tableauDeuxLengthAndBase);

let tableauDeuxLuiMeme = document.createElement("div");
tableauDeuxLuiMeme.innerHTML = (tableauDeux.map(event => event + event)).toString();
document.body.append(tableauDeuxLuiMeme);

let tableauDeuxGrand2 = document.createElement("div");
tableauDeuxGrand2.innerHTML = (tableauDeux.filter((event) =>  event.length > (2 + 2))).toString();
document.body.append(tableauDeuxGrand2);

let tableauDeuxModulo2 = document.createElement("div");
tableauDeuxModulo2.innerHTML = (tableauDeux.filter((event) =>  (event.length % 2) === 0)).toString();
document.body.append(tableauDeuxModulo2);

let tableauDeuxGrand10 = document.createElement("div");
tableauDeuxGrand10.innerHTML = (tableauDeux.filter((event) =>  (event.length - 3) > 10)).toString();
document.body.append(tableauDeuxGrand10);