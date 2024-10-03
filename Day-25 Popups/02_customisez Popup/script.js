function openPopup(){
    const overlay=document.querySelector(".overlay");
    const myPopup=document.querySelector(".myPopup");

    overlay.style.display="block";
    myPopup.style.display="block";
}




window.addEventListener("load",()=>{
    setTimeout(openPopup, 2000);
})