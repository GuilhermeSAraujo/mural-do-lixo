const URL_TO_GET = "http://localhost:3000/cadastros";
window.addEventListener("load", realizaRequisicaoGet);

async function realizaRequisicaoGet() {
    console.log("before call");
    let response = await fetch(URL_TO_GET, {
        method: "GET",
    });
    let data = await response.text();
    imprimeDadosNaTela(data);
}

function imprimeDadosNaTela(data){
    var body = document.getElementById("muralCadastros");
    var text = document.createTextNode(data)
    body.appendChild(text);
}
