// let value


// value = Math.PI
// value = Math.E



// console.log(value)


let value


const firstName = "Louis"
const lastName = "Armstrong"


const langs = "Java, Python, C++"

value = firstName + lastName

value = firstName + " " + lastName

value = "Mustafa Murat"

value += " Çoşkun" // VALUE = VALUE + " ÇOŞKUN"

value = firstName.length

value = firstName.concat(" ", langs, " ", "Caz") // firstname + ""..

value = firstName.toLowerCase()

value = firstName.toUpperCase()

value = firstName[firstName.length - 1]


//Index OF             onun kaçıncı indexte olduğunu bulma

value = firstName.indexOf("L") // L KAÇINCI İNDEXTE? 0        KÜÇÜK BÜYÜK UYUMLU ÖYLE BİR KARAKTER YOK İSE -1 GÖSTERİR

value = firstName.charAt(0) // 0.İNDEXTE HANGİ KARAKTER VAR ?
value = firstName.charAt(firstName.length - 1) // 0.İNDEXTE HANGİ KARAKTER VAR ?

//SPLIT

value = langs.split(",") // VİRGÜLE GÖRE PARÇALAMA obje şeklinde gösterir

//REPLACE DEĞİŞTİRME

value = langs.replace("Python", "JS")

//ıncludes ARAMA İÇİNDE VAR MI YOK MU FİLTRE

value = langs.includes("JAVA") // İÇİNDE JAVA VARSA TRUE YOKSA FALSE DÖNER

console.log(value)