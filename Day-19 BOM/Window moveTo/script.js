// Open a New Window
const btn1=document.getElementById("btn1")
let windowName;

btn1.addEventListener("click",()=>{
    windowName=window.open("","chombu","width=300,height=100");
    windowName.document.write(`<h1>Hello World in a new Window..!!</h1>`)   
})

//Move a new window
const btn2=document.getElementById("btn2");
btn2.addEventListener("click",()=>{
    windowName.moveTo(500,500);
    windowName.focus()
})

//Resize a new window
const btn3=document.getElementById("btn3")
btn3.addEventListener("click",()=>{
    windowName.resizeTo(700,400);
    windowName.focus();
})