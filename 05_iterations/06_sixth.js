let myArr=[1,2,3,4,5,6,7,8,9,10];

let arr=myArr.map((val)=> val+10);
console.log(arr);

const newArr=myArr
                .map((val)=> val*10)
                .map((val)=>val+1)
                .filter((val)=> val>50)

console.log(newArr);

