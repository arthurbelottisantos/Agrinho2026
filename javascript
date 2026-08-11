const botao = document.getElementById("btnSaibaMais");
const conteudo = document.getElementById("mais");

botao.addEventListener("click", function(){

    if(conteudo.style.display === "none"){

        conteudo.style.display = "block";
        botao.textContent = "Mostrar menos";

    }else{

        conteudo.style.display = "none";
        botao.textContent = "Saiba mais";

    }

});


const btnModo = document.getElementById("btnModoEscuro");

btnModo.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        btnModo.innerHTML = "Modo Claro";
    }else{
        btnModo.innerHTML = "Modo Escuro";
    }

});

function entrar(){

    let nome = document.getElementById("nome").value;

    if(nome == ""){
        document.getElementById("mensagem").innerHTML = "Digite seu nome!";
    }else{
        document.getElementById("mensagem").innerHTML = "Olá, " + nome + "!";
    }

}