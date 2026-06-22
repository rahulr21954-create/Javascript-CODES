// for each loop
const heros=["Superman","Flash","Spiderman","Ironman"];

/*heros.forEach(function(val){
    console.log(val);
    
})*/

heros.forEach((val)=>{
    //console.log(val);
    
})

heros.forEach((val,index,arr)=>{
    console.log(val,index,arr);
    
})

let myArr=[
    {
        user:"Ramu",
        id:"487hty",
    },
    {
        user:"Shyam",
        id:"564frt",
    },
    {
        user:"Monu",
        id:"932lku",
    }
];
myArr.forEach((item)=>{
    console.log(item.user);
    
})
