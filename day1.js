// function double(x) {
//     return x * 2;
// }

const value =  double = (x) => {
    return x * 2;
};

console.log(value);

const value1 = multiply = (x) => {
    return x * 2;
};

const name = greet = (name) => {
    return "Hello" + name;
};

isLong = (text) => {
    return text.length > 5;
}

const addTen = number => number + 10;

const isZero = number => number === 0;

const makeUpperCase = word => word.toUpperCase();

const makeLowerCase = string => string.toLowerCase();

const getFirstChar = string => string[0];

const combineStrings = (a , b) => a + b;


const classroom = {
    students: 0,
    
    // Regular function
    addStudent: function() {
        // Your code here
        return this.students + 1;
    },
    
    // Regular function
    start: function() {
        // Use setInterval with an arrow function here
        // Should call addStudent every 2000ms (2 seconds)
        setInterval(() => {
            this.students();
        }, 2000);

    }

    const person = {
        name: "John",
        // Using method shorthand (modern way)
        greet() {  // same as greet: function() {
            // Arrow function keeps 'this' from greet method
            setTimeout(() => {
                console.log("Hello, " + this.name);
            }, 1000);
        }
    };

    myP.addEventListener("click", function(){MediaQueryListEvent.style.background = "lightblue" });
