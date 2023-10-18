

// function sayMyName(){
//     console.log("Y");
//     console.log("A");
//     console.log("S");
//     console.log("H");
// }

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    
    //let result = number1 + number2
    //return result
    return number1 + number2
}


const result = addTwoNumbers(2,3)

//console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("Please Enter User Name")
    //     return
    // }
    if(!username){
        console.log("Please Enter User Name")
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Yash"))
//console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200,400,500));

const user = {
    userName: "yash",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and Price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    userName: "Ronak",
    price: 399  
})

const myNewArry = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArry));
console.log(returnSecondValue([200,400,100,600]));