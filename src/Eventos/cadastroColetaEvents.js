const URL_TO_POST = "http://localhost:3000/";
const botaoCadastrar = document.getElementById("enviar");

botaoCadastrar.addEventListener("click", formataDados);

function realizaRequisicaoPost(dadosInput) {
    fetch(URL_TO_POST, {
        method: "POST",
        body: JSON.stringify(dadosInput),
        headers: { "Content-Type": "application/json" },
    }).then({});
}

function formataDados(params) {
    let nome = document.getElementById("nome").value;
    let data = document.getElementById("data").value;
    let descricao = document.getElementById("descricao").value;
    let cidade = document.getElementById("cidade").value;
    let bairro = document.getElementById("bairro").value;
    let rua = document.getElementById("rua").value;
    let dadosInput = {
        nome: nome,
        data: data,
        descricao: descricao,
        cidade: cidade,
        bairro: bairro,
        rua: rua,
    };
    return realizaRequisicaoPost(dadosInput);
}

