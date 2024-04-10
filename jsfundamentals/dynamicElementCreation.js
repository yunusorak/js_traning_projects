// Yeni Element Oluşturma

// <a id="clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

const newLink = document.createElement("a")
const cardBody = document.getElementsByClassName("card-body")[1]

newLink.id = "clear-todos"
newLink.className = "btn btn-success"
newLink.href = "https://www.google.com.tr"
newLink.target = "_blank"

newLink.appendChild(document.createTextNode("Farklı Bir Sayfaya Git"))
cardBody.appendChild(newLink)


// Text Content
// newLink.textContent = "Farklı Sayfaya Git" ---------->>>>>>>>> İÇİNDEKİ TÜM HTML'İ SİLER SADECE O YAZIYI YAZAR BUNUN BİR ALTINDAKİ DAHA İYİ
// newLink.innerHTML = "Farklı Sayfaya Git"


// TEXT NODE
// const text = document.createTextNode("Naber")
// cardBody.appendChild(text)


console.log(newLink)