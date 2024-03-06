let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

let somma = a + b + c + d + e;
let media = somma / 5

console.log(`la somma tra i numeri equivale a ${somma} e la media risulta ${media}`)

let annoNascita = 1994;
let annoCorrente = 2024;

let etá = annoCorrente - annoNascita;
let to100 = 100 - etá;

console.log(`hai ${etá} anni e ti mancano ${to100} anni per compierne 100`)

let totGatti = 44;
let lenFila = 6;

let restoGatti = totGatti % lenFila;
let fileGatti = (totGatti - restoGatti) / lenFila;
let gattiMancanti = lenFila - restoGatti;

console.log(`Ci sono ${fileGatti} file di gatti e ne mancano ${gattiMancanti} per una nuova fila, con un avanzo di ${restoGatti}`)


const temps = [10, -2, 31, 22, 15, -6, 7];
let max = -100;

for (let i=0; i < temps.length; i++) {
    if (temps[i] > max) {
         max = temps[i];
    }
}

let min = max;

for (let i=0; i < temps.length; i++) {
    if (temps[i] < min) {
         min = temps[i];
    }
}

console.log(`La temperatura piu’ calda e’ ${max} quella piu’ fredda ${min}`)

