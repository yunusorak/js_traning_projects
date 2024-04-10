//FOR IN DONGÜSÜ


const user = {
    name: "Mustafa",
    age: 20
}

for (let key in user) {
    console.log(key, user[key])
}



//MAPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP


// const user = [{
//         name: "Mustafa",
//         age: 25
//     },
//     {
//         name: "Zeynep",
//         age: 40
//     },
//     {
//         name: "Ali",
//         age: 12
//     }
// ];

// const names = user.map(function(user) {
//     return user.name
// })
// const ages = user.map(function(age) {
//     return age.age
// })
// document.write(names)
// document.write("<br>")
// document.write(ages)










//FOR DONGULERİ

// const langs = ["Java", "C++", "Javascript", "Python"]

//>>>>>>>>>>>>>>>>FOREACH? aşağıdaki örnekte langsın tüm elemanlarını tek tek gezin

// langs.forEach(function(lang, index) {
//     document.write(lang + " " + (index + 1) + " <br>")
// })


// for (let i = 0; i < langs.length; i++) {
//     console.log(langs[i])
// }
//DO - WHILE EN AZ 1 ÇALIŞMA GARANTİSİ

// let i = 0

// do {
//     i++
//     console.log(i)
// } while (i < 10)






//BREAK VE Continue

// let i = 0

// while (i < 10) { //SONSUZ DÖNGÜ
//     i++
//     if (i == 3 || i == 5) {
//         continue
//     }
//     console.log(i)
//         // i++ 
// }



//WHILE DONGÜLERİ


// let i = 10

// while (i > 0) {
//     console.log(i)
//     i--
// }

// let i = 0;

// while (i < 10) {
//     console.log(i)
//     i++
// }