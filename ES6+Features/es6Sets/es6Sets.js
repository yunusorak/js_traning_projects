// ------Setler - Kümeler

const mySet = new Set();
mySet.add(100);
mySet.add(100); // 2. kez yazmayı denersekHATA VERMEZ VE EKLEMEZ
mySet.add(3.14)
mySet.add("Mustafa")
mySet.add(true)
mySet.add([1, 2, 3])
mySet.add({ a: 1, b: 2 })

const mySet2 = new Set([100, 3.14, "Mustafa"])

// console.log(mySet)
// console.log(mySet2)
// ------ Size - Kaç tane elemanı var
// console.log(mySet.size)

// ------ Delete Methodu --->KEY VARSA SİLER YOKSA HATA VERMEZ
// mySet.delete("Mustafa")


// ------ Has Methodu ---> Sorgulama O değer bu kümede var mı? varsa true
// ------KÜçük büyük harf duyarsız
// console.log(mySet.has("Mustafa"))
// console.log(mySet.has(3.14))
// console.log(mySet.has(2000))

// ------Array'i nasıl sorgulayacağız ??
// False alırız ama bu değeri bir şeyi atayıp denersek Olur örnek a = [1,2,3] diyip mySet.has(a) dersek true olur daha sağlıklı
// console.log(mySet.has[1, 2, 3])

// ------- Foreachle gezinme
// mySet.forEach((value) => {
//     console.log(value)
// })

// for (let value of mySet) {
//     console.log(value)
// }



// ------- Setlerden array oluşturma

const array = Array.from(mySet)

console.log(array)