//ES6 provides specific syntax for defining the getter and setter using the get and set keywords. For example:

class Person {
    constructor(name) {
        this.setName(name);
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }
}

let person = new Person('Jane Doe');
console.log(person); // Jane Doe

person.setName('Jane Smith');
console.log(person.getName()); // Jane Smith