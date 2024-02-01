/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const lato1 = 4;
const lato2 = 12;
function area(lato1, lato2) {
    return lato1 * lato2 / 2;
};

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(es21, es22) {
    if (es21 !== es22) {
        return es21 + es22
    } else {
        return (es21 + es22) * 3
    }
}

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(es31, _es32) {
    if (es31 <= 19) {
        return es31 - 19
    } else {
        return (es31 - 19) * 3
    }
}

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if (n >= 20 && n <= 100 || n === 400) {
        return 'True'
    } else {
        return 'false'
    }
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

let stringa = "nuntio vobis gaudium magnum"
function epify(stringa) {
    if (stringa.startsWith("EPICODE")) {
        return stringa;
    } else {
        stringa.push("EPICODE")
    }
}

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(num3) {
    if (num3 % 7 == 0 || num3 % 3 == 0) {
        return 'True'
    } else {
        return 'False'
    }
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

string = "i topi non avevANO NIPOTI"
function reverseString(string) {
    let nuovaStringa = string.split("");
    let nuovaStringa2 = "";
    for (let i = nuovaStringa.length - 1; 0 <= i; i--) {
        nuovaStringa2 += nuovaStringa[i];
    }
    return nuovaStringa2
}
console.log(reverseString('EPICODE'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

frase = "the pen is on the table"
function upperFirst(frase) {
    frase.split("").toUpperCase(0, 4, 6, 12);
    return frase
}


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
