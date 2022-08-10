const checkButton = document.querySelector(".check-button")
const inputForm = document.querySelector(".captcha-form ")
const captchaText = document.querySelector(".img-div")
const failure = document.querySelector(".failure")
const correct = document.querySelector(".correct")
const resetButton = document.querySelector(".reset-button")
let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
];

document.addEventListener("DOMContentLoaded", () => {
    captchaText.textContent = randomCharacters()
})
checkButton.addEventListener("click", checkCaptcha)
resetButton.addEventListener("click", resetCaptcha)


function resetCaptcha() {
    captchaText.textContent = randomCharacters()
    inputForm.value = ""
    hiddenElements()
}

function randomCharacters() {
    let randomText = "";

    for (let i = 0; i < 8; i++) {
        randomText += allCharacters[Math.floor(Math.random() * allCharacters.length)]
    }
    return randomText
}

function hiddenElements() {
    failure.style.display = "none"
    correct.style.display = "none"

}

function checkCaptcha() {
    hiddenElements()
    if (inputForm.value == captchaText.textContent.trim()) {
        correct.style.display = "block"
        setTimeout(() => {
            captchaText.textContent = randomCharacters()
            hiddenElements()
            inputForm.value = ""
        }, 1500)
    } else {
        failure.style.display = "block"
    }
}