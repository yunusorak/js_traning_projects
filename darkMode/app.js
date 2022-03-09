const darkLink = document.querySelector(".darkLink")
const darkIcon = document.querySelector(".darkIcon")
const body = document.querySelector("body")
const descriptionText = document.querySelector(".description__text")
const main = document.querySelector(".main")

darkLink.addEventListener("click", (event) => {
    darkIcon.classList.toggle("darkIcon_rotate")
    darkIcon.classList.toggle("colorIcon")
    console.log(body.style.backgroundColor)
    body.classList.toggle("darkBg")
    descriptionText.classList.toggle("white__text")

    // if (body.style.backgroundColor == "white") {
    //     body.classList.add("darkBg")
    //     descriptionText.style.color = "white"
    //     darkIcon.style.color = "white"
    // } else {
    //     darkIcon.style.color = "black"
    //     body.classList.remove("darkBg")
    //     descriptionText.style.color = "black"
    // }
})