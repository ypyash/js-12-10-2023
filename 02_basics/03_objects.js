// singleton
// Object.create


// object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Yash",
    "full name" : "Yash Patel",
    [mySym]: "mykey1",
    age: 22,
    location: "Ahmedabad",
    email: "yash@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "yash@google.com"
//Object.freeze(jsUser)
jsUser.email = "yash@microsoft.com"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());