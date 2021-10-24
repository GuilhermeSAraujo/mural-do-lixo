const URL_TO_POST = "http://localhost:3000/cadastros";
const botaoCadastrar = document.getElementById("enviar");
const alertaSucesso = document.getElementById("alertaSucesso");

botaoCadastrar.addEventListener("click", formataDados);

async function realizaRequisicaoPost(dadosInput) {
    let response = await fetch(URL_TO_POST, {
        method: "POST",
        body: JSON.stringify(dadosInput),
        headers: { "Content-Type": "application/json" },
    });
    if(response.ok){
        alertaSucesso.hidden = false;
    }
}

function formataDados(params) {
    let nome = document.getElementById("nome").value;
    let data = document.getElementById("data").value;
    let descricao = document.getElementById("descricao").value;
    let cidade = document.getElementById("cidade").value;
    let bairro = document.getElementById("bairro").value;
    let rua = document.getElementById("rua").value;
    let frequencia = document.getElementById("frequencia").value;
    let dadosInput = {
        nome: nome,
        data: data,
        frequencia: parseInt(frequencia),
        descricao: descricao,
        endereco: {
            cidade: cidade,
            bairro: bairro,
            rua: rua,
        },
    };
    return realizaRequisicaoPost(dadosInput);
}
