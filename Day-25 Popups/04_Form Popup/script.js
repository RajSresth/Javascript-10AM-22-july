let res;

function openPopup()
{
 const overlay=document.querySelector(".overlay");
 overlay.style.display="block";
 
 const pop=document.querySelector(".popup");
 pop.classList.add("show")

 showLoginform()
}
function closePopup()
{
    const overlay=document.querySelector(".overlay");
    overlay.style.display="none";

    const pop=document.querySelector(".popup");
    pop.classList.remove("show")
}

function showLoginform()
{
    const login=document.getElementById("login");
    login.style.display="flex";

    const signup=document.getElementById("signup");
    signup.style.display="none"
}

function showSingupform()
{
    const login=document.getElementById("login");
    login.style.display="none";

    const signup=document.getElementById("signup");
    signup.style.display="flex"
}


window.addEventListener("load",()=>{
    setTimeout(openPopup, 2000);
})


const cross=document.querySelector(".cross")

cross.addEventListener("click",()=>{
    res=false;
    closePopup()

    if(!res)
    {
        setTimeout(openPopup, 2000);
    }
})


const btn1=document.getElementById("btn1")
btn1.addEventListener("click",()=>{
    showLoginform()
})

const btn2=document.getElementById("btn2")
btn2.addEventListener("click",()=>{
    showSingupform()
})


const loginForm=document.getElementById("login");

loginForm.addEventListener("submit",()=>{
    res=true;
    closePopup()
    if(!res)
    {
        setTimeout(openPopup, 2000);
    }
})

const signupForm=document.getElementById("signup");

signupForm.addEventListener("submit",()=>{
    res=true;
    closePopup()
    if(!res)
    {
        setTimeout(openPopup, 2000);
    }
})
