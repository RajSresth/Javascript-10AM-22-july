window.addEventListener("keydown",(e)=>{
   if(e.ctrlKey && (e.key==="D"||e.key==="d"))
   {
    e.preventDefault()
    document.body.style.backgroundColor="black";
    console.log("Dark Mode Activated..!!")
    }

    else if(e.ctrlKey && (e.key==="L"||e.key==="l")){
        e.preventDefault()
       document.body.style.backgroundColor="white"
       console.log("Light Mode Activated..!!")
   }
})