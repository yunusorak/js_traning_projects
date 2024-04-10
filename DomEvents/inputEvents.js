const filter = document.getElementById("filter");

// Focus

// filter.addEventListener("focus", (e) => {
//     console.log("Başarılı = " + e.type)
// })

// ODAKTAN ÇIKINCA
// filter.addEventListener("blur", run)

// ------- Kopyalama - Paste ------- Ctrl + V yaparsan, yani bir şey yapıştırırsan run fonksiyonunu çalıştırır
// filter.addEventListener("paste", run)

// Copy -------- İnputtaki TEXT'i kopyalarsan çalışır
// filter.addEventListener("copy", run)

// Cut ----- İnputtaki text'i kesersek çalışır
// filter.addEventListener("cut", run)

// --------Select belirli textleri veya tüm texti seçtiğimizde çalışır
// filter.addEventListener("select", run)


function run(e) {
    console.log(e.type)
}






//+-------------------------------------SAYFA YÜKLENİNCE ALTTAKİ ÇALIŞIR
// document.addEventListener("DOMContentLoaded", load)

// function load(e) {
//     console.log("Sayfa Yüklendi")
// }
//---------------------------------------SAYFA YÜKLENİNCE ÜSTTEKİ ÇALIŞIR