// Session Storage - Key and Value

//Butonları seçmek

const add = document.querySelector("#add")
const del = document.querySelector("#delete")
const clear = document.querySelector("#clear")



// Input

const addKey = document.querySelector("#addkey")
const addValue = document.querySelector("#addvalue")
const deleteKey = document.querySelector("#deletekey")




add.addEventListener("click", (e) => {
    sessionStorage.setItem(addKey.value, addValue.value)
})
del.addEventListener("click", (e) => {
    sessionStorage.removeItem(deleteKey.value)
})
clear.addEventListener("click", (e) => {
    sessionStorage.clear()
})