let h2=document.createElement("h2");
h2.setAttribute("class","heading2")
h2.innerText="Hello Javascript!";
document.body.append(h2);

let btn=document.createElement("button");
btn.innerText="Click me"
btn.style.backgroundColor="red"
document.body.prepend(btn)