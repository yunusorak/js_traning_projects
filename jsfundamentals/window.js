let value;

value = window
value = window.location
value = window.location.host
value = window.location.pathname
value = window.location.hostname
value = window.location.port // port
value = window.location.protocol //http mi https mi
value = window.location.href //url tamamı

//value = window.location.reload() //sayfayı yenilemeyi sağlıyor
//------------ ÇOK İYİ BİR ŞEY RELOAD YENİLEME
// if (confirm("Sayfa yenilensin mi ?")) {
//     window.location.reload()
// } else {
//     console.log("Sayfa Yenilenmedi")
// }
// console.log(value)

value = window.outerHeight // SAYFA YÜKSEKLİĞİNİ ÇEKME
value = window.outerWidth

value = window.innerHeight //SADECE BODY KISMININ YÜKSEKLİĞİNİ ALIR TARAYICININ YÜKSEKLİĞİNİ ALMAZ
value = window.innerWidth

value = window.scrollX // NE KADAR X EKSENİNDE KAYDIRILMIŞ??
value = window.scrollY
console.log(value)










//---------------+Prompt
// const cevap = prompt("2 + 2 = ?")


// if (cevap == "4") {
//     console.log("Doğru")
// } else {
//     console.log("Yanlış")
// }

//---------------+Confirm
// if (confirm("Emin misiniz ?")) {
//     console.log("Silin Gitsin")
// } else {
//     console.log("Silmeyin")
// }
//alert("ss")