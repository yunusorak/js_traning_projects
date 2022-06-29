const colors = document.querySelector("#colors")
const colorsId = document.querySelector("#colorsId")
const colorsTick = document.querySelector("#colorsTick")
const body = document.querySelector("body")
const redColor = document.querySelector("#redColor")
const blueColor = document.querySelector("#blueColor")
const greenColor = document.querySelector("#greenColor")
const rgbSpan = document.querySelector("#rgbSpan")
const opacityRange = document.querySelector("#opacityRange")
colors.addEventListener("input", (e) => {
    console.log(e.target.value)
    colorsId.value = e.target.value
    if (colorsTick.checked == true) {
        body.style.backgroundColor = colorsId.value
    }
})

colorsTick.addEventListener("change", (e) => {
    body.style.backgroundColor = colors.value
})
redColor.addEventListener("change", changeColor)
blueColor.addEventListener("change", changeColor)
greenColor.addEventListener("change", changeColor)
opacityRange.addEventListener("change", changeColor)

function changeColor(){
   rgbSpan.textContent = redColor.value + "," + blueColor.value + "," + greenColor.value + "," + opacityRange.value
    body.style.backgroundColor = `rgba(${redColor.value}, ${blueColor.value}, ${greenColor.value}, ${opacityRange.value})`
}
