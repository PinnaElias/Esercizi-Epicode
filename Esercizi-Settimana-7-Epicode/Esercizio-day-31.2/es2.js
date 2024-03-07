let _animalName = document.getElementById('name');
let _ownerName = document.getElementById('ownerName');
let _raceId = document.getElementById('race');
let _speciesId = document.getElementById('species');

let list = document.getElementById('listPublisher');
let addAnimal = document.getElementById('add');

let pedigree = []

class Animal {
    constructor(_animalName, _ownerName, _raceId, _speciesId) {
        this._animalName = _animalName;
        this._ownerName = _ownerName;
        this._raceId = _raceId;
        this._speciesId = _speciesId;
    }

    compareOwner(anotherPet) {
        if (this._ownerName === anotherPet._ownerName) {
            console.log('Hanno il medesimo proprietario')
        } else {
            console.log('Hanno proprietari differenti')
        }
    }
}

const creaLista = function () {
listPublisher.innerHTML = ''
    pedigree.forEach((Animal) => {
        const itemCreation = document.createElement('li')
        itemCreation.innerText =
            "Nome dell'animale: " + Animal._animalName + "; Proprietario: " + Animal._ownerName + "; animale di razza: " + Animal._raceId + "appartenente alla specie: " + Animal._speciesId
        list.appendChild(itemCreation)
    })
}

addAnimal.onclick = function () {
    let anotherPet = new Animal(
        _animalName.value,
        _ownerName.value,
        _raceId.value,
        _speciesId.value
    )
    pedigree.push(anotherPet);
    creaLista()

    _animalName.value = ''
    _ownerName.value = ''
    _raceId.value = ''
    _speciesId.value = ''

}