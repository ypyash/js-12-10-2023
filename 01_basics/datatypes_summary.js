// Primitive

// 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.33

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// Reference (Non-Primitive)

// Array, Objects, Function

const heros = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name : "Yash",
    age : 22
}

const myFunction = function(){
    console.log("Hello World");
}

// +++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Yash"

let anotherName = myName
anotherName = "Ronak"

console.log(anotherName);
console.log(myName);

let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

console.log(user1)
let user2 = user1

user2.email = "yash@gmail.com"

console.log(user2);
console.log(user1);