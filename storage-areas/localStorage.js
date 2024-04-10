// Local Storage ----------String değerler yazar storageler

// SetItem

// localStorage.setItem("hareket", "burpee")
// localStorage.setItem("tekrar", 50)


///Get Item


// const value = localStorage.getItem("tekrar")



// console.log(value)






//----------- Clear Local Storage

// localStorage.setItem("hareket", "burpee")
// localStorage.setItem("tekrar", 50)

// console.log(localStorage.getItem("sport")) // Boşşsa null döner 


// if (localStorage.getItem("hareket") == null) {
//     console.log("Sorguladığınız veri bulunmuyor")
// } else {
//     console.log("Sorguladığınız veri bulunuyor")
// }



// --------- Array yazma Local storage

// const todos = ["Todo 1", "Todo 2", "Todo 3"]

// localStorage.setItem("todos", todos)

// console.log(localStorage.getItem("todos"))


// ----------->>>>>>>>>>>>>>>>>>> ARRAY OLARAK KOYMA --------------- localStorage.setItem("todos", JSON.stringify(todos))

// const value = JSON.parse(localStorage.getItem("todos")) // -------------- Böyle yaparsak string gelir yine  " JSON.parse " lazım
// console.log(value)









const form2 = document.getElementById("todo-form")
const todoInput2 = document.getElementById("todo")

form2.addEventListener("submit", addTodo2)

function addTodo2(e) {

    let value2 = todoInput2.value

    let todos2;

    if (localStorage.getItem("todos2") === null) {
        todos2 = []
    } else {
        todos2 = JSON.parse(localStorage.getItem("todos2"))
    }

    todos2.push(value2)

    localStorage.setItem("todos2", JSON.stringify(todos2))

    e.preventDefault()
}


















// const form = document.getElementById("todo-form")
// const todoInput = document.getElementById("todo")


// form.addEventListener("submit", addTodo)

// function addTodo(e) {

//     const value = todoInput.value

//     let todos;

//     if (localStorage.getItem("todos") === nul) {
//         todos = []
//     } else {
//         todos = JSON.parse(localStorage.getItem("todos"))
//     }

//     todos.push(value)

//     localStorage.setItem("todos", JSON.stringify(todos))


//     e.preventDefault();
// }


// localStorage.clear(); // Hepsini siler