// console.log(window.innerWidth)
// console.log(window.innerHeight)


const btn1=document.querySelector("#btn1")
const btn2=document.querySelector("#btn2")
const btn3=document.querySelector("#btn3")

btn1.addEventListener("click",()=>{
    const url="https://open.spotify.com";
    const windowName="chombu";
    const w=800;
const h=400;
const top=Math.floor((window.innerHeight - h)/2)
const left=Math.floor((window.innerWidth - w)/2)

window.open(url,windowName,`width=${w}, Height=${h}, top=${top}, left=${left},menubar=${"yes"},toolbar=${"yes"},status=${"yes"}`)
})

// Button Two
btn2.addEventListener("click",()=>{
const url="https://wynk.in/music";
const windowName="dinga";
const w=800;
const h=400;
const top=Math.floor((window.innerHeight - h)/2)
const left=Math.floor((window.innerWidth - w)/2)

window.open(url,windowName,`width=${w}, Height=${h}, top=${top}, left=${left}`)
})

// Button Three
btn3.addEventListener("click",()=>{
const url="https://gaana.com/";
const windowName="Tinku";
const w=800;
const h=400;
const top=Math.floor((window.innerHeight - h)/2)
const left=Math.floor((window.innerWidth - w)/2)
console.log(window.name)
window.open(url,windowName,`width=${w}, Height=${h}, top=${top}, left=${left}`)
})