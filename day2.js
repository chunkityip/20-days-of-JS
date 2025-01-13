// This is an object literal - a way to create an object directly
const person = {
    // Properties
    firstName: 'John',
    lastName: 'Doe',
    age: 30,

    // Method (function inside an object)
    fullName() {
        return this.firstName + ' ' + this.lastName;
    },

    // Another way to write a method (older style)
    sayHello: function() {
        return `Hello, I'm ${this.firstName}`;
    }
};



// Class and Inheritance 
class Animal{

    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{

    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{

    name = "fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    
    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();