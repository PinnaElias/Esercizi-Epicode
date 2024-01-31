/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

var num1 = 4;
var num2 = 7;
if (num1 > num2) {
  document.getElementById("maggiore").innerHTML = num1 + ' è maggiore di ' + num2
} else if (num2 > num1) {
  document.getElementById('maggiore').innerHTML = num2 + ' è maggiore di ' + num1
} else {
  document.getElementById('maggiore').innerHTML = num1 + ' e ' + num2 + ' sono uguali';
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

var es2 = "";
if (es2 !== 5) {
  console.log("Not equal")
} else {
  console.log("Equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

var es3 = 90;
if (es3 % 5 === 0) {
  console.log('divisibile per 5')
} else {
  console.log('non divisibile')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let es41 = 6;
let es42 = 8;

if (es41, es42 === 8 || es41 - es42 === 8 || es42 - es41 === 8 || es41 + es42 === 8 || es42 + es41 === 8) {
  console.log('verificato')
} else {
  console.log('non verificato')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let carrello = 52.00;
let spedizione = 10.00;
if (carrello >= 50) {
  document.getElementById('carrello').innerHTML = 'costo dell ordine ' + carrello;
} else {
  document.getElementById('carrello').innerHTML = 'costo dell ordine ' + (carrello + spedizione);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let carrello2 = carrello * 0.8
if (carrello2 >= 50) {
  document.getElementById('carrello2').innerHTML = 'costo dell ordine ' + carrello;
  document.getElementById('carrello2').innerHTML = 'costo dell ordine ' + (carrello2 + spedizione);
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let x = 7
let y = 9
let z = 3
let arrayOrdina = document.getElementById('arrayOrdina').innerHTML;
if (x > y) {
  if (z > x) {
    arrayOrdina.innerHTML = z + ',' + x + ',' + y;
  } else {
    if (z > y) {
      arrayOrdina.innerHTML = x + ',' + y + ',' + z
    }
  }
} else {
  if (z > y) {
    arrayOrdina.innerHTML = z + ',' + y + ',' + x
  } else {
    if (z > y) {
      arrayOrdina.innerHTML = x + ',' + z + ',' + y
    } else {
      if (z > x) {
        arrayOrdina.innerHTML = y + ',' + x + ',' + z
      }
    }
  }
}



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let test = 15
if (typeof test === 'number') {
  document.getElementById('test').innerHTML = 'è un numero';
} else {
  document.getElementById('test').innerHTML = 'non è un numero'
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let number = '41'
if (number % 2 === 0) {
  console.log('Numero pari')
} else {
  console.log('Numero Dispari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = 'Toronto';
document.getElementById('city').innerHTML = me.name + me.lastaname + me.skills + me.city;

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let nuovoArray = [];
nuovoArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
document.getElementById('push').innerHTML = nuovoArray;

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

nuovoArray[9] = 100
console.log(nuovoArray)
