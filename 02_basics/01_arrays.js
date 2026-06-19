let arr=[1,2,3,4,5,6];

let myArr=new Array(3,7,6,9,8);
console.log(arr);
console.log(myArr);

console.log(arr[2]);
arr.push(9);
console.log(arr);
arr.unshift(8);
console.log(arr);
arr.shift();
console.log(arr);
console.log(arr.includes(9));

let anotherArr=myArr.join();
console.log(anotherArr);
console.log(typeof anotherArr);

console.log("A ",myArr);
console.log(myArr.slice(1,4));
console.log("B ",myArr);
console.log(myArr.splice(1,4));
console.log("C ",myArr);









