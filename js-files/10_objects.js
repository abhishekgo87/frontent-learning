// // objects literals
// const mySym = Symbol("key1")


// const JsUser = {
//    name: "Abhishek Goswami",
//   [mySym]: "mykey1",
//    Age: 18,
//    location: "Meerut",
//    email: "abhishek@google.com",

//    isLoggedIn: false,
//    lastLoginDays: ["Monday", "Saturday"]
// }

// // console.log(JsUser.email)
// // console.log(JsUser[mySym])

// // console.log(JsUser["email"])

// JsUser.greeting = function(){
//   // console.log("Hello Js user");
// }

// // console.log(JsUser.greeting);


// // const tinderUser = new Object() This is Singleton object
// const tinderUser = {}
// tinderUser.id = "123abd"
// tinderUser.name = "Abhi"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);
// const regularUser = {
//    email: "abhi@gamil.com "
// }
// JsUser.greeting = function(){
//    //  console.log("hello js user");

// }

// // console.log(JsUser.greeting());


// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@gamil.com",
    fullname: {
      userfullname: {
          firstname: "Abhishek",
          lastname: "Goswami"
      }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// const obje1 = {1: "a", 2: "b"}
// const obje2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obje1, obje2)
// console.log(obj3);

const user = [
   {
       id: 1,
       email: "abhi@gmail.com"   
},
   {
       id: 1,
       email: "abhi@gmail.com"   
},
   {
       id: 1,
       email: "abhi@gmail.com"   
},
   {
       id: 1,
       email: "abhi@gmail.com"   
},

]
user[1].email