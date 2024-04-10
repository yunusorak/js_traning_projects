const filterInput = document.getElementById("filter")
const todoForm = document.getElementById("todo-form")


todoForm.addEventListener("submit", submitForm)

function submitForm(e) {
    console.log("Submit Event")

    e.preventDefault() // SAYFA YENİLENMESİNİ ENGELLİYORRRRRRRRRRRRRRRRRR
}


// filterInput.addEventListener("focus", (e) => {
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target) // HTML'INI ÇEKİYO
//     console.log(e.target.placeholder);
//     console.log(e.target.className)
//      console.log("Naber?")
// })


// filterInput.onfocus = () => {
//     console.log("Naber?")
// }