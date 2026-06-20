function printName(){
    console.log("Rahul");
    
}

printName();

function addTwoNum(num1,num2){
    console.log(num1+num2);
    return num1+num2;
    
}
let result=addTwoNum(45,7);
console.log("Result=",result);

function loginUserMsg(username){
    if(!username){
        console.log('Please enter a name');
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUserMsg("Rahul"));

function calculateCartPrice(...num1){
    return num1;
    
}

console.log(calculateCartPrice(1000,590,7890));

const user={
    name:"Rahul",
    price:450,
}

function userCheck(anyObj){
    console.log(`My name is ${anyObj.name} and price is ${anyObj.price}`);
    
}

userCheck(user);

const myArr=[100,600,400,800];

function arrSecondValue(arr){
    return arr[1];
}
console.log(arrSecondValue(myArr));


