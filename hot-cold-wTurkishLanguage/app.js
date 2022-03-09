const linkExit = document.querySelector(".link__exit")
const howToPlay = document.querySelector("#howtoplay")
const nasilOynanir = document.querySelector("#howToGameButton")
const anlasildiButton = document.querySelector("#anlasildiButton")
const ulGroup = document.querySelector(".list-group-ul")
const tahminText = document.querySelector(".tahminTextP")
const tahminButton = document.querySelector(".tahmin__button")
const tahminInput = document.querySelector("#tahmin__form")
const bilgiBox = document.querySelector(".descriptionInfoText")
const bilgiBox2 = document.querySelector(".descriptionInfoText2")
const tahminButton2 = document.querySelector(".tahmin__button2")

/* EVENTLISTENERS */
document.addEventListener("DOMContentLoaded", loaded)
tahminButton2.addEventListener("click", tryAgain)
nasilOynanir.addEventListener("click", howToPlayOpen)
anlasildiButton.addEventListener("click", howToPlayHide)
linkExit.addEventListener("click", howToPlayHide)
tahminButton.addEventListener("click", tahminFunc)
tahminInput.addEventListener("keyup", (event) => {
    if (tahminInput.value > 100 || tahminInput.value < 0) {
        tahminInput.value = ""
    }
    if (event.keyCode === 13) {
        tahminFunc()
    }
})

function tryAgain() {
    tahminButton2.style.display = "none"
    tahminInput.removeAttribute("disabled")
    tahminInput.value = ""
    bilgiBox.textContent = "BU SEFER DAHA ZOR OLACAK"
    resetAttemp()
    loaded()
    ulGroup.textContent = ""
    tahminInput.focus()
}

function randomNumber() {
    var nmRandom = Math.round(Math.random() * 100);
    console.log(nmRandom)
    return nmRandom

}
var attemptFunc = randomNumber()

function loaded() {
    tahminText.textContent = `${getAttemp()}.Tahmininiz`
}

function resetAttemp() {
    attemp = 0
    return attemp
}

// <!-- <li class="list-group-item-li">100</li> -->
var attemp = 0

function getAttemp() {
    attemp += 1
    return attemp
}

function howToPlayOpen() {
    howToPlay.style.left = "37%"
}

function howToPlayHide() {
    howToPlay.style.left = "-9999px"
}

function tahminFunc() {
    loaded()
    const tahminText = tahminInput.value
    if (tahminText != "") {
        if (tahminInput.value == attemptFunc) {
            tahminInput.setAttribute("disabled", "disabled")
            bilgiBox.textContent = `Tebrikler ${attemp - 1}. Denemizde Bildiniz` /* , Sayımız : ${attemptFunc}'idi */
            tahminButton2.style.display = "inline-block"
        } else {
            tahminInput.focus()
            if (tahminInput.value < attemptFunc) {
                bilgiBox.textContent = "Buralar çok sıcakkkkkkkk hocam"
            }
            if (tahminInput.value > attemptFunc) {
                bilgiBox.textContent = "Buralar Çok soğukkkkkkkkkkkkk"
            }
            addItems(tahminText)
            tahminInput.value = ""
                // tahminText = `${attemp}`
        }
    } else {
        alert("Lütfen Boş Sayı Bırakmayınız.")
    }
}

function addItems(message) {

    const listItem = document.createElement("li");
    listItem.className = "list-group-item-li"
    listItem.innerHTML = message
    ulGroup.appendChild(listItem)
}