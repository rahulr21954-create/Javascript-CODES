let marvelHeros=["Thor","Ironman","Spiderman"];
let dcHeros=["Superman","flash","batman"];

//marvelHeros.push(dcHeros);
console.log(marvelHeros);

const heros=marvelHeros.concat(dcHeros);
console.log(heros);

// spread method
const newHeros=[...marvelHeros,...dcHeros];
console.log(newHeros);

const arr=[3.6,7,[4,8,2],7,[3,5,[9,8]]];
const newArr=arr.flat(2);
console.log(newArr);

let anotherArr=Array.from("Rahul");
console.log(anotherArr);

console.log(Array.of(100,200,600));





