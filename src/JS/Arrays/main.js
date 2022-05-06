const darytiList = document.getElementById('daryti');
const baigtiList = document.getElementById('baigti');
const inputoElementas = document.getElementById('input');

let darytiArray = ['Išmokti HTML', 'Išmokti CSS', 'Išmokti JS'];
let baigtiArray = [];

darytiList.innerHTML = darytiArray.join('<br>');

function darytiPabaigti() {
    baigtiArray = darytiArray.slice(0, 2);
    darytiArray = darytiArray.splice(2, 1);
    setHTMLForLists();
}

function pridetiDaryti() {
    darytiArray.push(inputoElementas.value);
    setHTMLForLists();
}

function setHTMLForLists() {
    baigtiList.innerHTML = baigtiArray.join('<br>');
    darytiList.innerHTML = darytiArray.join('<br>');

}

darytiPabaigti();