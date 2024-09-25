const btn1=document.getElementById("btn1")

btn1.addEventListener("click",()=>{
    const p=document.querySelector("p")
    const content=p.textContent
    navigator.clipboard.writeText(content).then(()=>console.log("Text Copied to Clipboard..!!")).catch((error)=>console.log("Error: "+error))
})