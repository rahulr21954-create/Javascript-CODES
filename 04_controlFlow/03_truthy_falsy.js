let userEmail="user243@gmail.com";

if(userEmail){
    console.log("Can Logged.");
    
}
else{
    console.log("Can NOT Logged");
    
}

//falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy Values
// "0", "false", " ", [], {}, function(){}


// Nullis Coalescing operator (??) for: null, undefined

let val1=15??20;
console.log(val1);
let val2=null??89;
console.log(val2);
let val3=undefined??70;
console.log(val3);

// ternary operator ? :
let price=700;
price<=800?console.log("price less than 800."):console.log("price more than 800.");




