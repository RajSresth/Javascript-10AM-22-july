const button=document.querySelector("button")

/* Single Click*/
  button.addEventListener("click",()=>{
     alert("Button is Clicked..!!")
 }) 

/* double click*/
button.addEventListener("dblclick",()=>{
    console.log("Jhukega Nahi..!!")
}) 

/* mouse down*/
button.addEventListener("mousedown",()=>{
    console.log("Mouse is Pressed..!!")
})

/* mouse up*/
button.addEventListener("mouseup",()=>{
    console.log("Mouse is Released")
})


/* mouse move*/
button.addEventListener("mousemove",(e)=>{
console.log(`Mouse moved: X=${e.clientX}, Y=${e.clientY}`)
})