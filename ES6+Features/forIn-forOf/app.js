const person = {
    name: "Mustafa Murat",
    age: 25,
    salary: 3000
}

const langs = ["Python", "Java", "C++", "Php"]

const names = "Mustafa"

// For In
// Obje üzerinde gezinme
// for (let prop in person) {
//     console.log(prop + " = " + person[prop])
// }

// Array'de alma index index numaralarını verir
// for (let index in langs) {
//     console.log(index, langs[index])
// }

// --String

// for (let index in names) {
//     console.log(index + "=" + names[index])
// }




// ------------- For of
// ------------------Object'de TypeError verdi yani objede gezinemiyoruz.
// for (let value of person) {
//     console.log(value)
// }

// --------------Arrayde direkt değerler üzerinden gezinebiliriz

// for (let value of langs) {
//     console.log(value)
// }

// --------------String --------------

for (let character of names) {
    console.log(character)
}