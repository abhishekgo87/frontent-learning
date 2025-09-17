// Primitive

// 7 TYPES : String, Number, Boolean, null, undefined,  Symbol, BigInt

 const score = 100;
 const scoreValue = 100.3;

 const isLoggedIn = false;
 const outsideTem = null;
 let userEmail;

 const id = Symbol("123")
  const anotherId = Symbol('123')

  // console.log (id === anotherId);

  const bigNumber = 345590490523064945793042234n


//Reference (Non primitive)

// Array, Objects, Functions 

const heros = ["shakitman", "naagraj", "doga"]
 let myobj =  {
  name: "Abhishek",
  age: 22,

 }
 const myFunction = function() {
//    console.log("Heello world")
 }

// console.log(typeof myFunction)

let myYoutubename = "abhishekgoswami.com"

let anothername = myYoutubename
  anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "abhishek@google.com"

console.log(userOne.email);
console.log(userTwo.email);
