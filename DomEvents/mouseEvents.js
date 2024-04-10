const cardBody = document.querySelectorAll(".card-body")[1]
const title = document.querySelector("#tasks-title")


// ----------------<>>>>>>>>>>>>>>>>Click Event                  - MOUSE'A BASIP ÇEKTİKTEN SONRA YAPAR

// title.addEventListener("click", (e) => {
//     console.log(e.type)
// })

// ----------------<>>>>>>>>>>>>>>>> Double Click Event
// title.addEventListener("dblclick", run)



// ----------------<>>>>>>>>>>>>>>>> Mouse Down Event      - ELİNİ ÇEKMEDEN HEMEN YAPAR ANINDA

// title.addEventListener("mousedown", run)

// ----------------<>>>>>>>>>>>>>>>> Mouse UP Event      - ELİNİ .ÇEKTİKTEN SONRA 

// title.addEventListener("mouseup", run)



// --------- Mouseover *--- Hover olduğunda

// title.addEventListener("mouseover", run)

// -----------MOUSE OUT ----------- ÜSTÜNDEN ÇIKTIKTAN SONRA OLUYOR

// title.addEventListener("mouseout", run)


// cardBody.addEventListener("mouseover", run)
// cardBody.addEventListener("mouseout", run)


// ------------Mouse Enter ve Mouse Leave

cardBody.addEventListener("mouseenter", run)
cardBody.addEventListener("mouseleave", run)






function run(e) {
    console.log(e.type)
}


// console.log(cardBody)