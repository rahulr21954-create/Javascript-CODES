// for in loop

const users={
    user1:"Sam",
    user2:"Tomu",
    user3:"sonu",
    user4:"Monu"
}
//console.log(users);
//Keys
for(const key in users){
    console.log(key);
    
}
//Values
for(const key in users){
    console.log(users[key]);
    
}

let heros=["superman","spiderman","flash"];
for (const key in heros){
    //console.log(key); // it gives index
    //console.log(heros[key]);
    
    
}

let mp=new Map();
mp.set("Js","Javascript");
mp.set("Py","Python");
mp.set("cpp","C++");
mp.set("Py","Python");

/*for (const [key,val] in mp) {
    console.log(key,val);
      
}*/

