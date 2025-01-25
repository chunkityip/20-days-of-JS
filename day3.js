const object = ['Hi'];  // this is array , in JavaScript , there is no array and arraylist , only dynamic array

// A object creating with Array 
const object2 = [
    {name : 'John'},
    {name: 'Alex'}
]

console.log(object2);  // it will display [{name: 'John'}, {name: 'Alex'}]



let set = new Set() // Creating object using HashSet

let map = new Map() // Creating object using HashMap

const users = [
    { id: 1, name: 'John', active: true },
    { id: 2, name: 'Jane', active: false }
];

const name = users.map(user => user.name);
const id = users.map(user => user.id)

console.log(name);  // ['John', 'Jane']
console.log(id);  // [1, 2]

const activeUsers = users.filter(user => user.active);
const unActiveUsers = users.filter(user != user.active )

console.log(activeUsers); // Output: [{ id: 1, name: 'John', active: true }]
console.log(unActiveUsers); // Output: [{ id: 2, name: 'Jane', active: false }]

