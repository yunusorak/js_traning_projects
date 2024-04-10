// let number1, number2;

// arr = [100, 200, 300, 400]

// number1 = arr[0]
// number2 = arr[1]

// Destructing

// [number1, number2] = arr; // [number1, number2] = [100, 200, 300, 400]
// const [number1, number2] = arr;
// console.log(number1, number2)


// Obje Destructing

// const numbers = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
//     e: 50
// }

// const { a: number1, c: number2, e: number5 } = numbers

// console.log(number1, number2, number5)

// Function Destructing

// const getLangs = () => ["Python", "Java", "C++"]

// const [lang1, lang2, lang3] = getLangs() // getLangs return yapıyor onları
// console.log(lang1, lang2, lang3)

// Obje

const person = {
    name: "Mustafa Murat",
    year: 1993,
    salary: 3000,
    showInfos: () => {
        console.log("Bilgiler Gösteriliyor")
    }
}

const { name: names, year: year, salary: salary, showInfos: showInfos } = person

console.log(names, year, salary, showInfos())