// if
// const isUserLoggedIn = true
// const temperature = 41


// if (temperature < 50){
//     console.log("executed");
// }
// else{
//     console.log("not executed");
// }

//<, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// const balance = 1000

// //if (balance > 500) console.log("test");

// if (balance < 500){
//     console.log("less than ");
// }
// else if (balance < 750){
//     console.log("less than 750");
// }
// else if (balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }


const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}