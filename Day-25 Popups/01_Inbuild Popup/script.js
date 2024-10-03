let res=false;

function popup()
{
    res=confirm("Accept all cookies..!")
}

window.addEventListener("load",()=>{
    popup()
})

if(!res)
{
    setTimeout(popup, 5000);
}



