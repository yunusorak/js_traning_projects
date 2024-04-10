let value;

const numbers = [43, 56, 33, 23, 44, 35, 5]

// const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7)

const langs = ["Python", "Java", "C++", "JavaScript"]

const a = ["Merhaba", 22, null, undefined, 3.14]


value = numbers.length

value = numbers[2];

value = numbers[numbers.length - 1] //SONUNCUYU BULMA

//INDEX DEGİSTİRME

value = numbers[2] = 1000;

value = numbers.indexOf("1000") // 1000 KAÇINCI İNDEXTE? 2s        KÜÇÜK BÜYÜK UYUMLU ÖYLE BİR KARAKTER YOK İSE -1 GÖSTERİR

//ARRAY SONUNA DEĞER EKLEME PUSH

numbers.push(2000)
value = numbers

//ARRAYİN BAŞINA DEĞER EKLEME

numbers.unshift(101)
value = numbers

//ARRAYIN SONUNDAN DEĞERİNİ ATMA

numbers.pop()
value = numbers

//BAŞINDAN DEĞER ATMA

numbers.shift()
value = numbers

//SPLICE 0'DAN 3'E KADAR DEĞER SİLME, ATMA
numbers.splice(0, 3)

value = numbers


//REVERSE TERSE ÇEVİRME

numbers.reverse()
value = numbers


//SIRALAMA HEP İLK RAKAMA BAKARAK SIRALIYOR 23nin 2 sine bakar 
value = numbers.sort();
//KÜÇÜKTEN BÜYÜĞE
value = numbers.sort(function(x, y) {
    return x - y
});
// BÜYÜKTEN KÜÇÜĞE
value = numbers.sort(function(x, y) {
    return y - x
});


//value = Math.max(...numbers) ----->>>>>>>>>>>>> MAX'I BULMA 
console.log(value)