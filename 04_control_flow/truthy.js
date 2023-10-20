const userEmail = []

if (userEmail) {
    console.log("Got User Email");
}
else{
    console.log("Don't have Email");
}

//falsy value

// false, 0, -0, BigInt = 0n, "", null, undefined, NaN

//Truthy value

// "0", 'false', " ", [], {}, function(){}, 

// if (userEmail.length === 0) {
//     console.log("Array is Empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("obj is empty");
}


// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 15



console.log(val1);

// Terniary Operator

//condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("Less then 80"): console.log("more then 80");