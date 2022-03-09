const containerBox = document.querySelector(".container")
const color = [
    "#FF5733",
    "#89A034",
    "#63E765",
    "#1CA7A1",
    "#4E7EDE",
    "#8B4EDE",
    "#D54EDE",
    "#DE4EB4",
    "#DE4E7C",
    "#DE4E4E"
]

let createBox = (e) => {
    for (let i = 0; i < e; i++) {
        const div = document.createElement("div")
        div.classList.add("box")
        containerBox.appendChild(div)
    }
};
// create divs
createBox(306)

// Effect
const boxes = document.querySelectorAll(".box")

// method 1

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", (e) => {
        let randomNum = Math.round(Math.random() * color.length)
        boxes[i].style.backgroundColor = `${color[randomNum]}`
        boxes[i].style.cursor = "crosshair"
    })
    boxes[i].addEventListener("mouseout", (e) => {
        setTimeout(() => {
            boxes[i].style.backgroundColor = "#444"
        }, 2000);
    })

}

// method 2

// boxes.forEach((e) => {
//     e.addEventListener("mouseover", (d) => {
//         let randomNum = Math.round(Math.random() * color.length);
//         e.style.backgroundColor = `${color[randomNum]}`
//         e.style.cursor = "crosshair"
//     })
//     e.addEventListener("mouseout", () => {
//         setTimeout(() => {
//             e.style.backgroundColor = "#444"
//         }, 2000);
//     })
// })