
// Object Literals

const mySym=Symbol("Key1");
const user={
    name:"Rahul",
    "full name":"RahulP",
    age:18,
    [mySym]:"myKey1",
    email:"rahul7685@gmail.com",
    isLogged:true,
    loginDays:["Monday","Wednesday"],

}
console.log(user);


console.log(user.age);
console.log(user["email"]);
console.log(user["full name"]);
console.log(user[mySym]);

user.age=19;

//Object.freeze(user);

user.greeting= function(){
    console.log(`Hello Js!",${this.name}`);
    
}
user.greeting();
console.log(user.greeting());




