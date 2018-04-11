"use strict"

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    static countUsers(){
        console.log("There are 50 users");
    }
    register(){
        console.log(this.username + " has been registered successfully");
    }
}

class Member extends User{
    constructor(username, email, password, member_package){
        super(username, email, password);
        this.member_package = member_package;
    }
    get_package(){
        console.log(this.username+" is subscribed to "+this.member_package+" package");
    }
}
let bob = new User('bob', 'bob@example.com', 'bob$6161');
bob.register();
// Call a static method
User.countUsers();

let mike = new Member('mikey', 'mikey@example.com', 'mkikeymousey67', 'Standard')
mike.get_package();
mike.register();