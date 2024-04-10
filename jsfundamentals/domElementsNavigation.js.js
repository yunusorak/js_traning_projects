let value;


const todoList = document.querySelector(".list-group")
const todo = document.querySelector(".list-group-item:nth-child(2)")
const cardRow = document.querySelector(".card.row")



value = todoList
value = todo
value = cardRow


// Child Nodes - Text Dahil

value = todoList.childNodes;
value = todoList.childNodes[0]

// Children Özelliği -  Element

value = todoList.children;
value = todoList.children[todoList.children.length - 1]
value = todoList.children[2].textContent = "DEĞİŞTİ"



value = cardRow
value = cardRow.children
value = cardRow.children[2].children[1].textContent = "BURASI DA DEĞİŞTİ"


value = todoList
value = todoList.children[0]
value = todoList.firstElementChild // BİR ÜST SATIRDAKİNİN DAHA KOLAYI
value = todoList.lastElementChild // SON ÇOCUK
value = todoList.children.length // Element sayısı
value = todoList.childElementCount // BİR ÜST SATIRDAKİNİN DAHA KOLAYI KAÇ TANE ÇOCUK VAR?



value = cardRow;
// value = cardRow.parentElement // ÇOCUK CARDROW BURADA BABASINI ALDIK DİYELİM BİR ÜSTÜNÜ PARENTİNİ
value = cardRow.parentElement;
// value = cardRow.parentElement.parentElement // CARDROW ÇOCUKSA DEDESİNİ ALDIK BİR ÜSTÜNÜN BİR ÜSTÜ
value = cardRow.parentElement.parentElement

// -- Element Kardeşleri

value = todo;


value = todo.previousElementSibling;
value = todo.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling;

// value = todo.previousElementSibling // BİR ÖNCEKİ KARDEŞE GİTME MESELA TODO 2 DEYİZ BİZ O BİR Lİ TODO 1'DE BİR Lİ VE BİR ÜST KARDEŞ DEDİĞİMİZ TODO 1'E GİDECEK
// vaLue = todo.nextElementSibling // BİR SONRAKİ KARDEŞE GİDER
// value = todo.nextElementSibling.nextElementSibling // 3 KARDEŞSE EN BÜYÜĞÜNE GİDER TABİ BU EN KÜÇÜKSE YAİN ---------2İLERİ

//-----KARDEŞ YOKSA NULL DÖNER ÜSTTEKİLER


console.log(value)