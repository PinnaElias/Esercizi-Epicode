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
const pets = ['dog', 'cat', 'hamster', 'redfish']

const petsCopia = [...pets];
console.log(petsCopia) /*Commento di Elias: durante l'esercizio 4 mi sono reso conto che lavorare direttamente 
sulla stringa pets negli esercizi 2 e 3, tende a modificare l'ordine originale della stringa 'pets', distorcendo il possibile
risultato del quarto esercizio. Ho quindi ritenuto opportuno creare adesso una copia di 'pets' da poter riutilizzare nell'ambito
dell'esercizio numero 4*/

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

const petsOrder = pets.sort();
console.log(petsOrder)

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

const petsReverse = petsOrder.reverse()
console.log(petsReverse)

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const petsNumUno = petsCopia.shift(); // Commento di Elias: uso la copia di 'pets' per non dover riscrivere i precedenti esercizi, spero sia accettabile.
petsCopia.push(petsNumUno);
console.log(petsCopia);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]


function plate(brand) {
  switch (brand) {
    case 'Ford':
      return 'BU 128KM';
    case 'Peugeot':
      return 'HJ 849KD';
    case 'Volkswagen':
      return 'PO 999AA';
  }
}

for (let i = 0; i < cars.length; i++) {
  const brand = cars[i].brand;
  cars[i].licensePlate = plate(brand);
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const quartAuto = {
  brand: 'Fiat',
  model: 'Panda',
  color: 'green',
  licensePlate: "UO 420OR",
  trims: ['life', 'style', 'r-line'],
};
cars.push(quartAuto);
console.log(cars);


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (let i = 0; i < cars.length; i++) {
  const primoTrims = cars[i].trims;
  if (primoTrims.length > 0) {
    justTrims.push(primoTrims[0]);
  }
}
console.log("Array justTrims:", justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  let colore = cars[i].color;
  if (colore.indexOf('b') === 0) {
    console.log('Fizz');
  } else {
    console.log('Buzz')
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let ind = 0;
while (numericArray[ind] !== 66 && ind <= numericArray.length) {
  console.log(numericArray[ind]);
  ind++;
} 

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

const lettere = {
  'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
  'l': 10, 'm': 11, 'n': 12, 'o': 13, 'p': 14, 'q': 15, 'r': 16, 's': 17,
  't': 18, 'u': 19, 'v': 20, 'z': 21
};

const numeroLettere = [];
for (let i = 0; i < charactersArray.length; i++) {
  const carattere = charactersArray[i];
  const posizione = lettere[carattere] || null;
  numeroLettere.push(posizione);
}
console.log(numeroLettere);