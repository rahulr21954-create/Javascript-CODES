
let myDate=new Date();
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

let myCreatedDate=new Date(2026,5,18);
console.log(myCreatedDate.toLocaleDateString());

console.log((new Date(2026,0,18,4,23)).toLocaleString());

let anotherDate=new Date("2026-06-18");
console.log(anotherDate.toLocaleDateString());

let myTimeStamp=Date.now();
console.log(myTimeStamp);


