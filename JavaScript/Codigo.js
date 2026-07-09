const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(e){

        e.preventDefault();

        const nome = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("message").value.trim();

        if(nome.length < 3){
            alert("Digite um nome válido.");
            return;
        }

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!regexEmail.test(email)){
            alert("Digite um e-mail válido.");
            return;
        }

        if(mensagem.length < 10){
            alert("A mensagem deve ter pelo menos 10 caracteres.");
            return;
        }

        alert("Mensagem enviada com sucesso! Obrigado pelo contato.");

        form.reset();
    });
}