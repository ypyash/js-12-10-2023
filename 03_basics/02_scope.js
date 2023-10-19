
let a = 300

if(true) {
    let a = 10
    const b = 20
    // var c = 30
    //console.log("Inner: ", a);
}

//console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const userName = "Yash"

    function two(){
        const website = "Youtube"
        console.log(userName);
    }
    //console.log(website);

    two()
}

//one()

if(true){
    const userName = "Yash"
    if(userName === "Yash"){
        const website = " Youtube"
        //console.log(userName + website);
    }
    //console.log(website)
}
//console.log(userName);


//+++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++

console.log(addOne(5));

function addOne(num){
    return num + 1
}

//console.log(addTwo(5));

const addTwo = function(num){
    return num + 2
}

