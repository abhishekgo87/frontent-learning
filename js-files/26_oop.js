const user = {
  username: "Abhishek",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function(){
    // console.log("Got user detailes from database");
    console.log(`Username: ${this.username}`);
  }
}


console.log(user.username);
console.log(user.getUserDetails());
