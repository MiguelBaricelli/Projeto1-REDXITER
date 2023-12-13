document.addEventListener("DOMContentLoaded", function () {
    var loginForm = document.getElementById("login-form");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var messageDiv = document.getElementById("message");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validação simples do email (verifica se contém "@" e ".")
        if (!isValidEmail(emailInput.value)) {
            showMessage("Email inválido.");
            return;
        }

        // Validação de senha (pode ser personalizada conforme necessário)
        if (passwordInput.value.length < 8) {
            showMessage("A senha deve conter pelo menos 8 caracteres.");
            return;
        }

        // Simulação de autenticação (substitua esta lógica pelo seu sistema de autenticação real)
        var email = emailInput.value;
        var password = passwordInput.value;

        if (email === "seu_email@example.com" && password === "sua_senha_segura") {
            showMessage("Login bem-sucedido!", "success");
        } else {
            showMessage("Credenciais inválidas. Tente novamente.");
        }
    });

    function showMessage(message, type = "error") {
        messageDiv.textContent = message;
        if (type === "error") {
            messageDiv.style.color = "red";
        } else if (type === "success") {
            messageDiv.style.color = "green";
        }
    }

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});