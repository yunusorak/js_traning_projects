// Element Değiştirme -----------REPLACE
// <h5 class="card-title" id="tasks-title">Todolar</h5>

const cardBody = document.querySelectorAll(".card-body")[1]

const newElement = document.createElement("h3")

newElement.className = "card-title"
newElement.id = "tasks-title"
newElement.textContent = "Yeni Todolar"

// Eski Element

const oldElement = document.querySelector("#tasks-title")

cardBody.replaceChild(newElement, oldElement) // ELEMENT DEĞİŞTİRMEEEEEEEEEEEEEEEEEEEE H5'İ ÜSTTE, YENİ OLUŞTURDUĞUMUZ ELEMENTLE

console.log(newElement)



/*Dinamik Elementleri Silme


const todoList = document.querySelector("ul.list-group")
const todos = document.querySelectorAll("li.list-group-item")

 Remove Methodu


   todos[1].remove() 
   todoList.removeChild(todoList.lastElementChild) 
 todoList.removeChild(todos[3])


console.log(todos)
console.log(todoList) 
*/