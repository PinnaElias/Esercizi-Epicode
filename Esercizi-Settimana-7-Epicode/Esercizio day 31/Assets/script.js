//es 1

class User {
    constructor(_firstName, _lastName, _Age, _location) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._Age = _Age;
        this._location = _location;
    }
    compare(y) {
        if (this._Age > y._Age) {
            console.log(`${this._firstName} è più grande di ${y._firstName}`)
        } else {
            console.log(`${this._firstName} non è più grande di ${y._firstName}`)
        }
    }
};

const user1 = new User('Elio', 'Storietese', 2400, 'giappone');
console.log(user1._Age);
const user2 = new User('Gerardo', 'Via', 11, 'stati uniti');
console.log(user2._location);
const user3 = new User('Shrek', 'Ogre', 2001, 'Far far away')

user1.compare(user3);

//es 2

let Name = document.getElementById('petName');
let owner = document.getElementById('owner');
let species = document.getElementById('species');
let breed = document.getElementById('breed');
let pedigree = [];
let aggiungi = document.getElementById('add');
let petList = document.getElementById('petList')

class Petlist {
    constructor(nome, proprietario, specie, razza) {
        this.nome = Name;
        this.proprietario = owner;
        this.specie = species;
        this.razza = breed;
    }
    padroneUnico(pet2) {
        if (this.nome == pet2.nome) {
            return console.log(true);
        } else {
            return console.log(false)
        };
    }
};

const trueList = function () {
    petList.innerHTML = ''
    pedigree.forEach((Petlist) => {
        const petData = document.createElement('li')
        petData.innerText =
            'Nome: ' + Petlist.Name + ', proprietario: ' + Petlist.owner;
        petList.appendChild(petData)
    });
};

aggiungi.onclick = function () {
    let pet2 = new Petlist(
        Name.value,
        owner.value,
        species.value,
        breed.value,
    )
    pedigree.push(pet2)
    trueList();
};
