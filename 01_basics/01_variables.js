const accountId = 144553
let accountEmail = "yash@gmail.com" 
var accountPassword = "12345"
accountCity = "Ahmedabad"
let accountState;

// accountId = 2  //Not allowed

accountEmail = "yp@gmail.com"
accountPassword = "212121"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use Var
beacuse of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])