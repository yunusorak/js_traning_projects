// Event Bubbling

// document.querySelector(".container").addEventListener("click", () => {
//     console.log("Div Container")
// })

// document.querySelector(".card.row").addEventListener("click", () => {
//     console.log("Card Row")
// })

// document.querySelectorAll(".card-body")[1].addEventListener("click", () => {
//     console.log("Card Body")
// })






// Event Capturing veya Delegation


const cardBody = document.querySelectorAll(".card-body")[1]


cardBody.addEventListener("click", run);
// cardBody.appendChild(document.createTextNode("dd"))

function run(e) {
    if (e.target.className === "fa fa-remove") {
        console.log("Silme İşlemi")
    }
    if (e.target.id === "filter") {
        console.log("Filtreleme işlemi")
    }
    if (e.target.id === "clear-todos") {
        console.log("Tüm taskları silme işlemi")
    }
    // console.log(e.target)
}