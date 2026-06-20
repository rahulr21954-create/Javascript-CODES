// const obj=new Object();  //SingleTon Object
const obj={};
obj.name="Aman";
obj.id="123abc";
obj.email="aman675@gmail.com";

console.log(obj);

const anOtherUser={
    userEmail:"ronny567@gmail.com",
    fullname:{
        userFullname:{
            firstname:"Ronny",
            lastname:"Shankar"
        }
    }
}

console.log(anOtherUser);
console.log(anOtherUser.fullname.userFullname.firstname);
console.log(anOtherUser.fullname.userFullname["firstname"]);

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
const obj3={5:"a",6:"b"};
const newObj=Object.assign({},obj1,obj2,obj3);
console.log(newObj);

const obj4={...obj1,...obj2};
console.log(obj4);

const users=[
    {
        id:"2432cd",
        email:"hdc@chatgpt.com"
    },
     {
        id:"2432cd",
        email:"hdc@chatgpt.com"
    },
     {
        id:"2432cd",
        email:"hdc@chatgpt.com"
    }
]

console.log(users[1].email);

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

console.log(obj.hasOwnProperty("name"));




