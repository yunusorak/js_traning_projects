// Mapler - Key(anahtar) - Value(anahtarların değerleri)

// let myMap = new Map(); // Oluşturma

//console.log(myMap) // Obje olarak görünüyor

// const key1 = "Mustafa";
// const key2 = { a: 10, b: 20 };
// const key3 = () => 2;


// --------Map'e değer atama ve karşılığını verme
// --------2 Parametre alır 1)key , 2) Value - karşılığı
// myMap.set(key1, "String Değer")
// myMap.set(key2, "Object Literal Değer")
// myMap.set(key3, "Function Değer")

// --------Get İle Mapdeki değerleri çağımra
// console.log(myMap.get(key1))
// console.log(myMap.get(key2))
// console.log(myMap.get(key3))
// console.log(myMap)

// -------- Kaçelemanı var mapin??
// console.log(myMap.size)


// -------- YENİ DENEMEMİZ

// const cities = new Map()
// cities.set("Antalya", 3)
// cities.set("İstanbul", 15)
// cities.set("Ankara", 4)

// For each
// cities.forEach((key, value) => {
//     console.log(value + " Nüfüsu :  " + key)
// })

// For ofla gezinme

// for (let [key, value] of cities) { // Destructing
//     console.log(key, value)
// }

// -----------Keys

// for (let key of cities.keys()) {
//     console.log(key)
// }

// --------Map values

// for (let value of cities.values()) {
//     console.log(value)
// }


//-------- Arraylerden Map oluşturma
// const array = [
//     ["key1", "value1"],
//     ["key2", "value2"]
// ]
// const lastMap = new Map(array);

// console.log(lastMap)

// --------Maplerden array oluşturma

const cities = new Map()

cities.set("Antalya", 3)
cities.set("İstanbul", 15)
cities.set("Ankara", 4)

const array = Array.from(cities);
// ["Antalya",3],["İstanbul",15],["Ankara",4]
console.log(array);