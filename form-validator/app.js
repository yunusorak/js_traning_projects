const validButton = document.querySelector(".btn-valid-submit")
const password = document.querySelector("#password")
const confirmPass = document.querySelector("#password-confirm")
const username = document.querySelector("#username")
const alertBox = document.querySelector(".alert-info")
const email = document.querySelector("#email")

validButton.addEventListener("click", getFormControl)

{
    /* <div class="alert alert-danger" role="alert">
      This is a danger alert—check it out!
    </div> */
}

function getFormControl(e) {
    nullControl(username.value, password.value, confirmPass.value)


    e.preventDefault()
}


function nullControl(element, pass, confirmpass) {
    if (element == "") {
        return showInfos("danger", "Please Do Not Leave Blank Space")
    } else if (pass == "" || confirmpass == "") {
        return showInfos("danger", "Do not leave passwords blank")
    } else if (pass != confirmpass) {
        return showInfos("warning", "Passwords do not match")
    } else {
        if (email.value != "") {
            return showInfos("success", "Registration Successful.")
        } else {
            return showInfos("danger", "Do not leave the e-mail field blank")
        }
    }
}

function showInfos(alert, message) {
    let alerts = document.createElement("div");
    alerts.className = `alert alert-${alert}`
    alerts.textContent = message


    alertBox.appendChild(alerts)

    setTimeout(function() {
        alerts.remove()
    }, 2000);




}