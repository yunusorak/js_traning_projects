// ------------------------------------------- Klavye Eventleri

const header = document.querySelector(".card-header")
const todoInput = document.querySelector("#todo")

todoInput.addEventListener("keyup", (e) => {

    // console.log(e.target.value) // e.target İLE todoInput'un HTML'ini çekiyoruzz ".value" ile içindeki değeri alıyoruz form olduğu için value 
    header.textContent = e.target.value

})




// ------------basınca çalışır------------ SADECE *HARF* VE *SAYILAR*
// document.addEventListener("keypress", (e) => {

//     console.log("Naber?");
//      console.log(e.which); // BASTIĞIMIZ TUŞUN ASCII KODUNU GÖSTERİR
//     console.log(e.key) // HANGİ TUŞA BASTIĞINI ÇEKME

// });
// --------------------------- keydown -->>>>>TUŞA BASAR BASMAZ TETİKLENİYOR BU, TÜM TUŞLAR OLACAK MESELA ÜST TUŞU
// document.addEventListener("keydown", (e) => {

// console.log(e.which); // BASTIĞIMIZ TUŞUN ASCII KODUNU GÖSTERİR
// console.log(e.key) // HANGİ TUŞA BASTIĞINI ÇEKME

// });

// ----------------------keyup          --ELİNİ TUŞTAN ÇEKTİKTEN SONRA OLUYOR VE KLAVYEDEKİ TÜM TUŞLAR

// document.addEventListener("keyup", (e) => {

// console.log(e.which); // BASTIĞIMIZ TUŞUN ASCII KODUNU GÖSTERİR
//     console.log(e.key) // HANGİ TUŞA BASTIĞINI ÇEKME

// });