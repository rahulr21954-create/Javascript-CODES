
function addLanguage(lang){
    let ul=document.querySelector(".language");
    let li=document.createElement("li");
    li.innerText=`${lang}`;
   ul.append(li)
}
addLanguage("python");
addLanguage("React");

function addOptiLang(lang){
    const ul=document.querySelector(".language");
    const li=document.createElement("li");
    li.appendChild(document.createTextNode(`${lang}`));
    ul.append(li);
    
}
addOptiLang("golang")

// Edit
let secondLang=document.querySelector("li:nth-child(2)");
//secondLang.innerHTML="Mojo"
const newli=document.createElement("li");
newli.textContent="Mojo";
secondLang.replaceWith(newli)

// Edit
const firstLang=document.querySelector("li:nth-child(1)");
firstLang.outerHTML="<li>Java</li>"

// remove element
const lastLang=document.querySelector("li:nth-child(4)");
lastLang.remove();