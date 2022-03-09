const colors = document.querySelector("#colors")
const colorsId = document.querySelector("#colorsId")
const colorsTick = document.querySelector("#colorsTick")
const body = document.querySelector("body")
const redColor = document.querySelector("#redColor")
const blueColor = document.querySelector("#blueColor")
const greenColor = document.querySelector("#greenColor")
const rgbSpan = document.querySelector("#rgbSpan")
const opacityRange = document.querySelector("#opacityRange")
colors.addEventListener("change", (e) => {
    console.log(e.target.value)
    colorsId.value = e.target.value
    if (colorsTick.checked == true) {
        body.style.backgroundColor = colorsId.value
    }
})

colorsTick.addEventListener("change", (e) => {
    body.style.backgroundColor = colors.value
})

redColor.addEventListener("change", (e) => {
    rgbSpan.textContent = e.target.value + "," + blueColor.value + "," + greenColor.value + "," + opacityRange.value
    body.style.backgroundColor = `rgba(${e.target.value}, ${blueColor.value}, ${greenColor.value}, ${opacityRange.value})`

})

blueColor.addEventListener("change", (e) => {
    rgbSpan.textContent = redColor.value + "," + e.target.value + "," + greenColor.value + "," + opacityRange.value
    body.style.backgroundColor = `rgba(${redColor.value}, ${e.target.value}, ${greenColor.value}, ${opacityRange.value})`
})

greenColor.addEventListener("change", (e) => {
    rgbSpan.textContent = redColor.value + "," + blueColor.value + "," + e.target.value + "," + opacityRange.value
    body.style.backgroundColor = `rgba(${redColor.value}, ${blueColor.value}, ${e.target.value}, ${opacityRange.value})`

})

opacityRange.addEventListener("change", (e) => {
    rgbSpan.textContent = redColor.value + "," + blueColor.value + "," + redColor.value + "," + e.target.value
    body.style.backgroundColor = `rgba(${redColor.value}, ${blueColor.value}, ${greenColor.value}, ${e.target.value})`

})