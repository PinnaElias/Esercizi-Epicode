/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
JavaScrypt utilizza principalmente 5 tipi di datatype. Essi sono numeri, stringhe, booleani, null e undefined.
-Numeri: Dati numerici. Possono essere interi o decimali. Se sono decimali bisogna specificare usando il punto e non la virgola.
-Stringhe: Testo. Dati alfabetici o alfanumerici in cui i numeri sono comunque trattati come lettere o parti del nome, non come valori, per esempio "parola5" verrà considerata un intera parola e non una parola + un valore. Questo tipo di dato è determinato dall'uso delle virgolette.
-Boolean: Vero o Falso. indica la proprietà di verità di una funzione.
-Null: Hai creato una variabile, ma non hai ancora deciso quanto vale? Null serve a mantenere in piedi la variabile senza causare errori anche se il valore non è stato deciso. Viene usata consapevolmente da chi ha scritto il codice.
-Undefined: Esce se non ho definito bene qualcosa durante il processo di assegnazione di una variabile.
 */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = 'Elias'

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

console.log(20 + 12)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = 'Pinna'

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let subtraction = 4 - x
console.log(subtraction)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john'
let name2 = 'John'
console.log('Uguaglianza', name1 === name2)
