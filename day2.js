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