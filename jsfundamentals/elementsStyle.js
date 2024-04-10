const element = document.querySelector("#clear-todos")

//Element Özellikleri


// console.log(element.id)
// console.log(element.classList)
// console.log(element.className)
// console.log(element.classList[0])
// console.log(element.textContent) // SADECE İÇİNDEKİ YAZILARI ALMA
// console.log(element.innerHTML) // İÇİNDEKİ HTML ETİKETLERİ DAHİL HEPSİNİ ALIR
// console.log(element.href)

// console.log(element.style)


//------------Style ve Element Özelliklerini değiştirme

// element.className = "btn btn-primary";
// element.style.color = "black";
// element.style.marginLeft = "30%"
// element.href = "https://www.google.com.tr"
// element.target = "_blank"

// element.textContent = "SİLİN"
// element.innerHTML = "<span style='color:'>Silin </span>"


// console.log(element.textContent)
// console.log(element)

// const elements = document.querySelectorAll(".list-group-item") //NodeList

// elements.forEach(el => {
//     el.style.color = "red"
//     el.style.backgroundColor = "#eee"
// });



// console.log(elements);
//console.log(element)







let element2 = document.querySelector("li:last-child")
element2 = document.querySelector("li:nth-child(4)")
let elements2 = document.querySelectorAll("li:nth-child(odd)")
element2 = document.querySelectorAll("li:nth-child(even)")

elements2.forEach(els2 => {
    els2.style.fontSize = "25px"
    els2.style.backgroundColor = "red"
})

element2.forEach(el => {
    el.style.fontSize = "25px"
    el.style.backgroundColor = "turquoise"
})

console.log(element2)