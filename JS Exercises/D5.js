/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("___________________ Esercizio 1 ___________________");
const pets = ["dog", "cat", "hamster", "redfish"];
console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("___________________ Esercizio 2 ___________________");
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("___________________ Esercizio 3 ___________________");
pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("___________________ Esercizio 4 ___________________");
pets.shift();
pets.push("redfish");
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("___________________ Esercizio 5 ___________________");
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

const licensePlate = "abc123";
for (let index = 0; index < cars.length; index++) {
  cars[index].licensePlate = licensePlate;
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("___________________ Esercizio 6 ___________________");
cars.push({
  brand: "Fiat",
  model: "Panda",
  color: "white",
  trims: ["city", "road"],
  licensePlate: "ddd444",
});
console.log(cars);

for (let index = 0; index < cars.length; index++) {
  cars[index].trims.pop();
}

// console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("___________________ Esercizio 7 ___________________");
const justTrims = [];
for (let index = 0; index < cars.length; index++) {
  justTrims.push(cars[index].trims[0]);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("___________________ Esercizio 8 ___________________");
for (let index = 0; index < cars.length; index++) {
  const firstLetter = cars[index].color.charAt(0);
  if (firstLetter === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("___________________ Esercizio 9 ___________________");
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

let num = 0;
while (numericArray[num] !== 32) {
  console.log(numericArray[num]);
  num++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("___________________ Esercizio 10 __________________");
const charactersArray = ["g", "n", "u", "z", "d"];

const nuovoArray = [];
for (let index = 0; index < charactersArray.length; index++) {
  switch (charactersArray[index]) {
    case "a":
      nuovoArray.push(1);
      break;
    case "b":
      nuovoArray.push(2);
      break;
    case "c":
      nuovoArray.push(3);
      break;
    case "d":
      nuovoArray.push(4);
      break;
    case "e":
      nuovoArray.push(5);
      break;
    case "f":
      nuovoArray.push(6);
      break;
    case "g":
      nuovoArray.push(7);
      break;
    case "h":
      nuovoArray.push(8);
      break;
    case "i":
      nuovoArray.push(9);
      break;
    case "l":
      nuovoArray.push(10);
      break;
    case "m":
      nuovoArray.push(11);
      break;
    case "n":
      nuovoArray.push(12);
      break;
    case "o":
      nuovoArray.push(13);
      break;
    case "p":
      nuovoArray.push(14);
      break;
    case "q":
      nuovoArray.push(15);
      break;
    case "r":
      nuovoArray.push(16);
      break;
    case "s":
      nuovoArray.push(17);
      break;
    case "t":
      nuovoArray.push(18);
      break;
    case "u":
      nuovoArray.push(19);
      break;
    case "v":
      nuovoArray.push(20);
      break;
    case "z":
      nuovoArray.push(21);
      break;
  }
}
console.log(charactersArray);
