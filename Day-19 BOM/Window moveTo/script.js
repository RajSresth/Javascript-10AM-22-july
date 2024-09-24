const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
let windowName;
btn1.addEventListener("click",()=>{
    
    windowName=window.open("","chombu","width=600, height=380");
    windowName.onload = () => {
        console.log("Window loaded successfully.");
    };

    windowName.onerror = (err) => {
        console.error("Failed to load the window.", err);
    };
})

btn2.addEventListener("click",()=>{
    windowName.moveBy(768,365)
    // windowName.focus(); 
})

// const btn1 = document.getElementById("btn1");
// const btn2 = document.getElementById("btn2");
// let myWindow;

// btn1.addEventListener("click", () => {
//     myWindow = window.open("https://open.spotify.com", "myWindow", "width=600,height=380");
// });

// btn2.addEventListener("click", () => {
//     if (myWindow) { // Check if myWindow is not null
//         myWindow.moveBy(500,300)
//         myWindow.focus();
//     }
// });
