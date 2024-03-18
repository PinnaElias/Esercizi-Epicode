interface Smartphone {
    credito: number;
    numeroChiamate: number;
}

type dataUser = {
    name: string | undefined;
    surname: string | undefined;
}

class User implements Smartphone {
    nome: string
    cognome: string
    credito: number = 0
    numeroChiamate: number = 0

    constructor(nome: string, cognome: string, credito: number, numeroChiamate: number) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
    }
    ricarica(ammontare: number): void {
        this.credito += ammontare
    }
    chiamata(minutiDurata: number): void {
        this.credito -= (minutiDurata * 0.2)
        this.numeroChiamate += 1
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }
    get n404() {
        return this.credito
    }
    get getNumeroChiamate() {
        return this.numeroChiamate
    }
}

const me = new User("Gino", "Paoli", 10, 0)
me.ricarica(5)
me.chiamata(1)
console.log(me.n404)
console.log(me.getNumeroChiamate)
me.azzeraChiamate()