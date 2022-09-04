const seat = document.querySelectorAll(".chairs .seat")
const chairsElement = document.querySelector(".info-chairs")
const priceElement = document.querySelector(".info-price")
const selSelect = document.querySelector("#sel1")

// Event Listeners
seat.forEach(element => {
    element.addEventListener("click", getControlClass)
});
selSelect.onchange = function() {
    updatePriceFromSelect()
}

function getControlClass(e) {
    if (e.target.classList.contains("occupied") == false) {
        e.target.classList.toggle("selected")
        updateChairs(e)
    }
}

function updateChairs(e) {
    if (e.target.classList.contains("selected")) {
        chairsElement.textContent = Number(chairsElement.textContent) + 1
        updatePrice(e)
    } else {
        chairsElement.textContent = Number(chairsElement.textContent) - 1
        updatePrice(e)
    }
}

let amount = 0;

function updatePrice(e) {
    if (e.target.classList.contains("selected")) {
        amount += 1
        priceElement.textContent = amount * Number(selSelect.options[selSelect.selectedIndex].value)
    } else {
        amount -= 1
        priceElement.textContent = amount * Number(selSelect.options[selSelect.selectedIndex].value)
    }
}

function updatePriceFromSelect() {
    priceElement.textContent = amount * Number(selSelect.options[selSelect.selectedIndex].value)
}