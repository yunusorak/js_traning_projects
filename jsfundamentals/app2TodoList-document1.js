//Window Object
let value;

value = document
value = document.all;
value = document.all.length //HTML SAYFASINDA KAÇ TANE ELEMENT VAR?
value = document.all[0]
value = document.all[6]
value = document.all[document.all.length - 1]

// const elements = document.all

// console.log(elements)
// for (let i = 0; i < elements.length; i++) { ***************TÜM HTML ELEMANLARINI CONSOLE'A YAZDIRMA******html collection
//     console.log(elements[i])
// }
// elements.foreach(function(element) { ****************ÇALIŞMAZ OBJECT YAPMALIYIZ O DA ALTTAKİ GİBİ ARRAY'E ÇEVİRECEĞİZ
//     console.log(element)
// })

// const collections = Array.from(document.all) **********************ÇOK İYİ BU -----------

// console.log(typeof(collections))

// collections.forEach(function(element) {
//     console.log(element)
// }) *************************** ÇOK İYİ BU KAPANIŞ-------------

value = document.all[8]
value = document.body
value = document.head
value = document.location
value = document.location.hostname
value = document.location.protocol
value = document.location.port

value = document.URL
value = document.location.href
value = document.characterSet //UTF-8 Mİ ONU ÇEKİYOR HTML'DEN
console.log(value)