// Tüm Elementleri seçme
const form = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo")
const todoList = document.querySelector(".list-group")
const firstCardBody = document.querySelectorAll(".card-body")[0]
const secondCardBody = document.querySelectorAll(".card-body")[1]
const filter = document.querySelector("#filter")
const clearButton = document.querySelector("#clear-todos")



function eventListeners() { // Tüm Event Listenerlar
    form.addEventListener("submit", addTodo)
    document.addEventListener("DOMContentLoaded", loadAllTodosUI)
    secondCardBody.addEventListener("click", deleteTodo)
    filter.addEventListener("keyup", filterTodos)
    clearButton.addEventListener("click", clearAllTodos)
}

function clearAllTodos(e) {
    if (confirm("Tümünü Silmek İstediğinize Emin Misiniz ?")) {
        // Arayüzden todoları temizleme
        /* todoList.innerHTML = "" --------------->>>>>>> YAVAŞ YÖNTEM */

        while (todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild)
        }
        localStorage.removeItem("todos")

        showAlert("danger", "Tüm Todolar Başarıyla Silindi")
    }



}

function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item")

    listItems.forEach((listItem) => {
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue) === -1) {
            // Bulamadı
            listItem.setAttribute("style", "display : none !important")
        } else {
            listItem.setAttribute("style", "display : block")
        }


    })



}

function deleteTodo(e) {

    if (e.target.className === "fa fa-remove ") {
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent)
        e.target.parentElement.parentElement.remove()
        showAlert("success", "Todo Başarıyla Silindi")
    }


}

function deleteTodoFromStorage(deleteTodo) {
    let todos = getTodosFromStorage()

    todos.forEach((todo, index) => {
        if (todo === deleteTodo) {
            todos.splice(index, 1) // Array değerini silebiliriz.
        }
    })

    localStorage.setItem("todos", JSON.stringify(todos))

}

function loadAllTodosUI() {
    let todos = getTodosFromStorage()

    todos.forEach((todo) => {
        addTodoToUI(todo)
    })

}

function addTodo(e) {
    const newTodo = todoInput.value.trim()

    if (newTodo === "") {
        /*        <div class="alert alert-danger" role="alert">
                    This is a danger alert—check it out!
                </div>
*/
        showAlert("danger", "  Oh no! Lütfen Bir Todo Giriniz.")
    } else {
        addTodoToUI(newTodo);
        // showAlertSuccces("success", "Başarıyla Todo Eklendi")
        addTodoToStorage(newTodo);
        showAlert("success", " Well Done!  Todo Başarıyla Eklendi");
    }



    e.preventDefault()
}

function getTodosFromStorage() { // Storage'den Todoları Alma
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    return todos
}

function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage()

    todos.push(newTodo)

    localStorage.setItem("todos", JSON.stringify(todos))
}

// function showAlertSuccces(type, message) {
//     const alert = document.createElement("div")

//     alert.className = `alert alert-${type}`
//     alert.textContent = message

//     firstCardBody.appendChild(alert)

//     setTimeout(() => {
//         alert.remove()
//     }, 2500)
// }

function showAlert(type, message) {
    const alert = document.createElement("div")

    alert.className = `alert alert-${type}`
    alert.textContent = message

    firstCardBody.appendChild(alert)

    // setTimeOut


    // window.setTimeout -------Alttaki 2.5s sonra çalışır
    setTimeout(() => {
        alert.remove();
    }, 2500);

}

function addTodoToUI(newTodo) { // String değerini list item olarak UI'ya ekleyecek --- yani arayüze
    /* <li class="list-group-item d-flex justify-content-between">
    Todo 1
    <a href = "#" class ="delete-item">
        <i class = "fa fa-remove"></i>
    </a>

</li>*/

    // List Item oluşturma
    const listItem = document.createElement("li");

    // Link oluşturma
    const listLink = document.createElement("a");
    listLink.href = "#"
    listLink.className = "delete-item"
    listLink.innerHTML = "<i class = 'fa fa-remove '></i>"

    listItem.className = "list-group-item d-flex justify-content-between";
    //Text node olarak ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(listLink)


    /* Todo Liste Item'ı ekleme */

    todoList.appendChild(listItem)

    todoInput.value = ""

}

eventListeners()