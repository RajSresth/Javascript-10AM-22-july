// const btn1=document.getElementById("btn1")
// const btn2=document.getElementById("btn2")
// let windowName;
// btn1.addEventListener("click",()=>{
//     windowName="myWindow"
//     window.open("https://open.spotify.com",windowName,"width=600, height=380")
// })

// btn2.addEventListener("click",()=>{
//     windowName.moveTo(768,365)
//     windowName.focus(); 
// })

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
let myWindow;

btn1.addEventListener("click", () => {
    myWindow = window.open("https://open.spotify.com", "myWindow", "width=600,height=380");
});

btn2.addEventListener("click", () => {
    if (myWindow) { // Check if myWindow is not null
        myWindow.moveBy(500,300)
        myWindow.focus();
    }
});
