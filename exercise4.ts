class Person {
    name: string;
    age: number;
    private SocialSecurityNumber: number;

    constructor ( names: string, ages: number, SocialSecurityNumbers: number){
        this.name = names;
        this.age = ages;
        this.SocialSecurityNumber = SocialSecurityNumbers;
    }
    public getSocialSecurityNumber(): number {
        return this.SocialSecurityNumber;
    }
        getAge(): number {
            return this.age;
        }
    
}
const person = new Person( "Mushe", 20, 5555);
console.log(person.getAge());
console.log(person.getSocialSecurityNumber());
