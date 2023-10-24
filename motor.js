// Após carregar, iniciar os eventos em JS
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("nt1").addEventListener("change",nr_update);
    document.getElementById("nt2").addEventListener("change",nr_update);
});

// Variável de Função de Atualizar NR
const nr_update = function(){
    let nota1 = Number(document.getElementById("nt1").value);
    let nota2 = Number(document.getElementById("nt2").value);
    document.getElementById("warning").textContent = ""
    if (nota2 != 0){
        let divisao = (nota1/nota2).toString();
        document.getElementById("mathTotal").textContent = "Resultado: "+divisao.slice(0, (divisao.indexOf("."))+4);
    }
    else
    {
        document.getElementById("warning").textContent = "O divisor não pode ser 0!";
    }
}
