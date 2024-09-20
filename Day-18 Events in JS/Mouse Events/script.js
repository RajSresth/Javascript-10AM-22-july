const button=document.querySelector("button")


/* Single Click*/
  button.addEventListener("click",()=>{
     console.log("Button Left Clicked..!!")
 }) 

/* double click
button.addEventListener("dblclick",()=>{
    console.log("Jhukega Nahi..!!")
}) */

/* mouse down
button.addEventListener("mousedown",()=>{
    console.log("Mouse is Pressed..!!")
})*/

/* mouse up
button.addEventListener("mouseup",()=>{
    console.log("Mouse is Released")
})*/


/* mouse move
button.addEventListener("mousemove",(e)=>{
console.log(`Mouse moved: X=${e.clientX}, Y=${e.clientY}`)
})*/


/* mouseover 
button.addEventListener("mouseenter",()=>{
    document.body.style.backgroundColor="black"
})*/

/* mouseout
button.addEventListener("mouseleave",()=>{
    document.body.style.backgroundColor="white"
})*/

/* contextmenu right click
button.addEventListener("contextmenu",(e)=>{
    e.preventDefault()
    console.log("Button Right Clicked")
})*/

/*wheel*/
window.addEventListener("wheel",(e)=>{
    console.log(e.deltaY)
})