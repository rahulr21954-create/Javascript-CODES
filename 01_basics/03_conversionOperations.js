let stringNum="65";  //if "65fgj.." then NaN
let num=Number(stringNum);
console.log(num); //65
console.log(typeof(num)); //number

let isLogged=true;
let numIsLogged=Number(isLogged);
console.log(numIsLogged); //1
console.log(typeof(numIsLogged)); //number

let Num=547;
let stringnum=String(Num);
console.log(stringnum); //547
console.log(typeof(stringnum)); //string

let isNum=1;
let booleanIsNum=Boolean(isNum);
console.log(booleanIsNum); //true
console.log(typeof(booleanIsNum)); //boolean
console.log(Boolean("Rahul")); //true
console.log(Boolean("")); //false