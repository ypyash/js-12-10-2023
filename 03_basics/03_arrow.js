const user = {
    userName: "Yash",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.userName} ,  Welcome to Website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()

//console.log(this);

// function one(){
//     let userName = "Yash"
//     console.log(this.userName);
// }

// one()

const one =  () => {
        let userName = "Yash"
        console.log(this.userName);
    }

    //one()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({userName: "Yash"})


console.log(addTwo(3,4));
