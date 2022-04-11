// let a, b, c, d;
// a = "hello"; // String
// b = 11.22; // Number
// c = true // Boolean true/false
// d = [a, b, c]; // Arrays (hold multiple vars)

// console.log(a, b, c);
// console.log(d[0], d[1], d[2]);
// console.log(d);

// Sudejus 2 strings, jie susijungia

// let a, b;
// a = 'labas';
// b = 'rytas';
// let c = a + b
// console.log(c); 

// Sudejus string with number gausit number gale

// let a, b;
// a = 'labas';
// b = 2;
// let c = a + b
// console.log(c); 

// Pridedant boolean prie skaiciaus priklausomai ar true ar false, pridesit T=1 arba F=0

// let a, b;
// a = 1;
// b = true;
// let c = a + b
// console.log(c); 

// NaN - Not a Number

// let dalinys, daliklis;

// dalinys = 12;
// daliklis = 2;

// let dalmuo;

// dalmuo = dalinys / daliklis;

// console.log(dalmuo, typeof dalmuo);

// Arrays

// let q, w, e, r, t;

// q = '42';
// w = 7;
// e = true;
// r = [q, w, e];
// t = ['pepe', 69, false, true];

// console.log(q, w, e)
// console.log(r)
// console.log(t)

// let a, b, c;

// a = 1;
// b = 2;
// c = 3;

// if (a + b > c) {
//     console.log('First')
// } else if (a - b == c) {
//     console.log('Second')
// } else {
//     console.log('Nothing returned')
// }

const elementas = document.getElementById('inpuots');
const reiksme = Number(elementas.value);

const kintamasis = 2;
const suma = kintamasis + reiksme;



function count() {
    console.log(suma);
}

if (suma > 10) {
    console.log('daugiau uz 10')
} else if (suma < 10) {
    console.log('maziau uz 10')
}

// Variables

const a = 2; // Negalima perrasyt
a = 3 // error

let b = 2 // galit koreaguoti
b = 'kitka' // Veiks

var c = 2 // Old syntax

// Data types

let q, w, e, r;

q = 'Tekstas' // String
w = 3.14 // Number
e = true // Boolean true/false arba 1/0
r = [q, e, 'kita reiksme', 12, true] // Array, talpina daug reiksmiu

// Conditions

if (a < b) { // Salyga ir jei ji yra true
    // Vykdomas kodo blokas
} else if (a > b) {
    // Kitas vykdomas kodo blokas
} else if (a >= b) {
    // Kitas vykdomas kodo blokas
} else if (a <= b) {
    // Kitas vykdomas kodo blokas
} else { // Be salygos
    // Kodo blokas
}

if (a > b) c = d; 

// Functions 

// @mixin mixinoPavadinimas($a: center) 

function funkcijosPavadinimas() {
    let a = 4;
    const b = 4;

    console.log('funkcijos', a)
    if (a == b) {

    }
    // Vykdomas kodo blokas
}

console.log('globalus', a)

// DOM

document.getElementById('kazkoksHtmlNurodytasId')