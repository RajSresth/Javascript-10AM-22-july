// console.log(window.innerWidth)
// console.log(window.innerHeight)


const btn1=document.querySelector("#btn1")
const btn2=document.querySelector("#btn2")
let windowName;
btn1.addEventListener("click",()=>{
    const url="https://open.spotify.com";
      windowName="chombu";
    const w=800;
    const h=400;
    const top=Math.floor((window.innerHeight - h)/2)
    const left=Math.floor((window.innerWidth - w)/2)

window.open(url,windowName,`width=${w}, Height=${h}, top=${top}, left=${left},menubar=${"yes"},toolbar=${"yes"},status=${"yes"}`)
})


btn2.addEventListener("click",()=>{
    windowName.close()
})

