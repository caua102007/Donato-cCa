const password = "123"; // Defina sua senha aqui

function checkPassword() {
    const passwordInput = document.getElementById("password").value;

    if (passwordInput === password) {
        document.getElementById("content").style.display = "none";
        document.getElementById("restricted-content").style.display = "block";
        return false; // Impede o envio do formulário
    } else {
        alert("Senha incorreta!");
        return false; // Impede o envio do formulário
    }
}

function goToHome() {
    document.getElementById("content").style.display = "block";
    document.getElementById("restricted-content").style.display = "none";
}

