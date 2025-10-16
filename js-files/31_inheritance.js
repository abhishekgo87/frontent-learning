className   User {
  constructor(username){
    this.username = username
  }

  logMe(){
    console.log(`USERNAME IS ${this.username}`);
  }
}

className Teacher extends User{

  constructor(username, email, password){
     this.email = email
     super(username)
     this.password = password
  }

  addCourse(){
     console.log(`A new course was added by ${
      this.username }`);
  }
}

chai.addCourse()
const masalaChai = new User("masalaChai")

masalaChai.logMe()
