// Elementleri Seçme

const githubForm = document.getElementById("github-form")
const nameInput = document.getElementById("githubname")
const clearLastUsers = document.getElementById("clear-last-users")
const lastUsers = document.getElementById("last-users")
const github = new Github()
const ui = new UI()

function eventListeners() {
    githubForm.addEventListener("submit", getData)
    clearLastUsers.addEventListener("click", clearAllSearched)
    document.addEventListener("DOMContentLoaded", getAllSearched)

}

eventListeners();


function getData(e) {

    let username = nameInput.value.trim()


    if (username === "") {
        alert("Lütfen geçerli bir kullanıcı adı girin.");
    } else {
        github.getGithubData(username)
            .then(response => {
                if (response.user.message === "Not Found") {
                    // Hata Mesajı
                    ui.showError("Kullanıcı bulunamadı")
                } else {


                    ui.addSearchedUserToUI(username)


                    Storage.addSearchedUserToStorage(username)
                    ui.showUserInfo(response.user)
                    ui.showRepoInfo(response.repo)
                }

            })
            .catch(err => ui.showError(err))

    }


    ui.clearInput() // Input Temizleme
    e.preventDefault();
}


function clearAllSearched() {
    // Son arananları temizleme

    if (confirm("Emim misiniz?")) {
        // Silme

        Storage.clearAllSearchedUsersFromStorage() // Storage'den Temizleme

        ui.clearAllSearchedFromUI()

    }

}

function getAllSearched() {
    // Tüm arananları Storagedan al ve UI'ye ekle


    let users = Storage.getSearchedUsersFromStorage();


    let result = "";
    users.forEach(user => {
        // <li class="list-group-item">asdaskdjkasjkşdjşasjd</li>

        result += `<li class="list-group-item">${user}</li>`


    })


    lastUsers.innerHTML = result

}