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
        } else if (this._Age == y._Age) {
            console.log(`${this._firstName} ha la medesima età di ${y._firstName}`)
        } else {
            console.log(`${this._firstName} è più piccolə di ${y._firstName}`)
        }
    }
};

const user1 = new User('Marco', 'Cappato', 35, 'Italia');
console.log(user1._Age);
const user2 = new User('Gerardo', 'Via', 11, 'stati uniti');
console.log(user2._location);
const user3 = new User('Shrek', 'Ogre', 2001, 'Far far away');
const user4 = new User('Dario', 'Caro', 16, 'Italia');


user4.compare(user3);