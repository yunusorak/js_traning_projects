const countMinute = document.querySelector(".minuteText")
const countSecond = document.querySelector(".secondText")

// Inputs
const minutInput = document.querySelector(".minute__Input")
const secondInput = document.querySelector(".second__Input")

// Buttons

const startButton = document.querySelector(".startButton")
const resetButton = document.querySelector(".resetButton")

// Sounds

const resetSound = new Audio('sounds/reset.wav')
const finishSound = new Audio('sounds/finish.wav')
const startSound = new Audio('sounds/start.wav')

minutInput.addEventListener("change", chanceMin)

function chanceMin() {
    countMinute.textContent = minutInput.value < 10 ? 0 + minutInput.value : minutInput.value
}

secondInput.addEventListener("change", chanceSec)

function chanceSec() {
    countSecond.textContent = secondInput.value < 10 ? 0 + secondInput.value : secondInput.value
}



startButton.addEventListener("click", (e) => {

    if (minutInput.value < 0 || secondInput.value > 60 || (secondInput.value == 0 && minutInput.value == 0)) {
        alert("Lütfen Geçerli Değerler Girin")
    } else {
        startSound.play()
        setTimeout(() => {
                const interval = setInterval((e) => {
                    if (countMinute.textContent == 0 && countSecond != 0) {
                        countSecond.textContent = Number(countSecond.textContent) < 10 ? "0" + (Number(countSecond.textContent) - 1) : (Number(countSecond.textContent) - 1);
                        // secondInput.value -= 1
                    }
                    if (countSecond.textContent == 0 && countMinute.textContent != 0) {
                        countMinute.textContent = Number(countMinute.textContent) < 10 ? "0" + (Number(countMinute.textContent) - 1) : (Number(countMinute.textContent) - 1);

                        if (countSecond.textContent == 0) {
                            countSecond.textContent = "60";
                        }
                        countSecond.textContent = Number(countSecond.textContent) < 10 ? "0" + (Number(countSecond.textContent) - 1) : (Number(countSecond.textContent) - 1);


                        // minutInput.value -= 1
                    }
                    if (countSecond.textContent != 0 && countMinute.textContent != 0) {
                        countSecond.textContent = Number(countSecond.textContent) < 10 ? "0" + (Number(countSecond.textContent) - 1) : (Number(countSecond.textContent) - 1);
                        if (countSecond.textContent == 0 && countMinute != 0) {
                            countSecond.textContent = "60"
                            countMinute.textContent = Number(countMinute.textContent) < 10 ? "0" + (Number(countMinute.textContent) - 1) : (Number(countMinute.textContent) - 1);
                        }

                    }


                    resetButton.addEventListener("click", (eventt) => {
                        clearInterval(interval)
                    })

                    if (Number(countMinute.textContent) == 0 && Number(countSecond.textContent) == 0) {
                        setTimeout(() => {
                            minutInput.value = "MINUTE"
                            secondInput.value = "SECOND"
                            countMinute.textContent = "TIME IS FINISHED"
                            countSecond.textContent = "-"
                            finishSound.play()
                                // countChange()
                            clearInterval(interval)
                        }, 100)
                    }

                }, 1000)
            },
            100);

    }
})

resetButton.addEventListener("click", resetFunc)

function resetFunc() {
    countChange()
    countMinute.textContent = "00"
    countSecond.textContent = "00"
    resetSound.play()
}


function countChange() {
    secondInput.value = "SECOND"
    minutInput.value = "MINUT"
}
console.log(typeof(Number(countMinute.textContent)))