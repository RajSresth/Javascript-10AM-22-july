const box=document.getElementById("box")
let sideLeft=100;
let sideTop=100;

window.addEventListener("keydown",(e)=>{
    const moveSpeed=50;
    switch (e.key) {
        case "w":
            sideTop=sideTop-moveSpeed
            break;
        case "s":
            sideTop=sideTop+moveSpeed
            break;
        case "a":
            sideLeft=sideLeft-moveSpeed
            break;
        case "d":
            sideLeft=sideLeft+moveSpeed
            break;
        case ' ':
                sideLeft=sideLeft+500    
                sideTop=sideTop+500
        break;
        default:
                break;    
    }
    box.style.left=sideLeft + "px";
    box.style.top=sideTop + "px";
})