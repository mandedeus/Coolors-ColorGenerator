const color = document.querySelectorAll(".color");
const genBtn = document.querySelector(".new")
const currentHex = document.querySelectorAll(".color h2")

function randomHex(){
    const hexText = chroma.random();
    return hexText;
}
lockedColors = [];
function setColor() {
    color.forEach((div, index) => {
        const hex = div.children[0]
        const colorText = randomHex()
        div.style.backgroundColor = colorText;
        hex.innerText = colorText;

        //Lock Feature
        if(div.children[1].classList.contains("lock")){
            lockedColors.push(hex.innerText)
        }
        else{
            lockedColors.push(chroma(colorText).hex())
        }

        //Fetch Color and Hex
        checkContrast(colorText,hex)
    })
}
setColor()

function checkContrast(color,hex){
    const luminance = chroma(color).luminance();
    if(luminance > 0.5){
        hex.style.color = "black";
    }
    else{
        hex.style.color = "white";
    }
}

genBtn.addEventListener("click", setColor)