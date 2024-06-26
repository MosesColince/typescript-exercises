var Person = /** @class */ (function () {
    function Person(names, ages, SocialSecurityNumbers) {
        this.name = names;
        this.age = ages;
        this.SocialSecurityNumber = SocialSecurityNumbers;
    }
    Person.prototype.getSocialSecurityNumber = function () {
        return this.SocialSecurityNumber;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var person = new Person("Mushe", 20, 5555);
console.log(person.getAge());
console.log(person.getSocialSecurityNumber());
