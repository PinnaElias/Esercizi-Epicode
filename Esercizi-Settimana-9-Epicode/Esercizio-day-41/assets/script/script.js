var User = /** @class */ (function () {
    function User(nome, cognome, credito, numeroChiamate) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.nome = nome;
        this.cognome = cognome;
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
    }
    User.prototype.ricarica = function (ammontare) {
        this.credito += ammontare;
    };
    User.prototype.chiamata = function (minutiDurata) {
        this.credito -= (minutiDurata * 0.2);
        this.numeroChiamate += 1;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    Object.defineProperty(User.prototype, "n404", {
        get: function () {
            return this.credito;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getNumeroChiamate", {
        get: function () {
            return this.numeroChiamate;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var me = new User("Gino", "Paoli", 10, 0);
me.ricarica(5);
me.chiamata(1);
console.log(me.n404);
console.log(me.getNumeroChiamate);
me.azzeraChiamate();
