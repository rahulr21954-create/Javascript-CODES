const user={
    username:"Rahul",
    age:18,
    welcomeMsg:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }
}

//user.welcomeMsg();
//user.username="Aman";
//user.welcomeMsg();

//console.log(this);

/*function codes(){
    let username="Rahul";
    console.log(this.username);
    console.log(this);
    
    
}*/

/*const codes=function(){
    let username="Rahul";
    console.log(this.username);
    console.log(this);
    
    
}*/

/*const codes=()=>{
    let username="Rahul";
    console.log(this.username);
    console.log(this);
    
    
}
    codes();*/

/*const addTwo=(num1,num2)=>{
    return num1+num2;
    
}*/

//const addTwo=(num1,num2)=> num1+num2;

const addTwo=(num1,num2)=> (num1+num2);
console.log(addTwo(3,7));

const  data=()=> ({username:"Ram"});
console.log(data());




