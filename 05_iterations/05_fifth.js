

let myArr=[3,5,6,8,3,4,9,7];

let newArr=myArr.filter((num)=> num>5);
//console.log(newArr);

let anotherArr=[];
myArr.forEach((val)=>{
    if(val>4){
    anotherArr.push(val);
    }
})
console.log(anotherArr);

