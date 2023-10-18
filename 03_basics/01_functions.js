

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
console.log(loginUserMessage())