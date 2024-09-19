const button=document.querySelector("button");

button.onclick=changeBg

function changeBg()
{
    const body=document.body;
    body.style.cssText="background-color:black;color:white;"
    
    const h1=document.getElementById("root")
    h1.textContent="Jai Shree Ram..🙏"
}