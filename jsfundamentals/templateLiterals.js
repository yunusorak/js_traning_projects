//TEMPLATE LITERALS
let value
const names = " Mustafa Murat Çoşkun"
const department = "Bilişim"
const salary = 4000

// value = "İsim : " + names

value = `İsim :
    ${names}
Departman :
    ${department}
Maaş :
    ${salary}
        `

function a() {
    return "Merhaba"
}
document.body.innerHTML = `<ul>
<li>İsim : ${names} </li>
<li>Departman : ${department} </li>
<li>Maaş : ${salary} </li>
<li>MATEMATİK İŞLEMİ : ${10 / 4} </li>
<li>FONKSİYON ÇAĞIRMA : ${a()} </li>
</ul>
`
console.log(value)