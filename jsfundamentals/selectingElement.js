//Element'i ID'ye göre seçme

let value;


value = document.getElementById("todo-form")
value = document.getElementById("task-title")

//Class'a göre seçme

value = document.getElementsByClassName("list-group-item")[0]
value = document.getElementsByClassName("form-control")[0]
value = document.getElementsByTagName("li")

//Query Selector - CSS Selector - Tek bir element

value = document.querySelector("#todo-form")
value = document.querySelector("#tast-title")
value = document.querySelector(".list-group-item")

value = document.querySelector("li")

//querySelectorAll - Tüm Elementleri seçme

value = document.querySelectorAll(".list-group-item")

value.forEach(element => {
    console.log(element)
});

console.log(value)