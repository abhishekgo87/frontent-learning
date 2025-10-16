className User {
  constructor(email, password){
    this.email = email;
    this.password = password
  }

  get password(){
    return this._password.toUpperCase()
  }

  set password(value){
    this._password = value.toUpperCase
  }
}

const Abhishek = new User("abhi@.ai", "123")
console.log(Abhishek.password)