

let myArr=[1,2,3,4];

let total=myArr.reduce((prev,curr)=>{
    console.log(`prev:${prev} and curr:${curr}`);
    return prev+curr;
},0);
console.log(total);

const ShoppingCart=[
    {
        product:"Laptop",
        price:56000,
    },
    {
        product:"Mobile",
        price:87000,
    },
    {
        product:"Speaker",
        price:999,
    },
    {
        product:"Ear Buds",
        price:2987,
    },
];

let totalPrice=ShoppingCart.reduce((prev,item)=> prev+item.price ,0);
console.log("Total Price=",totalPrice);
