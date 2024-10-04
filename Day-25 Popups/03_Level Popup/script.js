function openPop()
{
    const overlay=document.querySelector(".overlay");
    overlay.style.display="block";

    const popup=document.querySelector(".myPopup");
    popup.classList.add("show")
}

function closePop()
{
    const overlay=document.querySelector(".overlay");
    overlay.style.display="none";

    const popup=document.querySelector(".myPopup");
    popup.classList.remove("show");
}

window.addEventListener("load",()=>{
    setTimeout(openPop, 2000);
})

let response;

//Allow button
const btn1=document.getElementById("btn1")
btn1.addEventListener("click",()=>{
    response=true;
    closePop()
})

//Cancel Button
const btn2=document.getElementById("btn2")
btn2.addEventListener("click",()=>{
    response=false;
    closePop()

    if(!response)
    {
        setTimeout(openPop, 3000);
    }
})
