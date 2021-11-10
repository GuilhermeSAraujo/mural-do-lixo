const URL_TO_POST = "http://localhost:3000/cadastros";
const botaoCadastrar = document.getElementById("cadastrar");
const alertaSucesso = document.getElementById("alertaSucesso");

botaoCadastrar.addEventListener("click", formataDados);

async function realizaRequisicaoPost(dadosInput) {
    let response = await fetch(URL_TO_POST, {
        method: "POST",
        body: JSON.stringify(dadosInput),
        headers: { "Content-Type": "application/json" },
    });
    // if (response.ok) {
    //     constroiAlertaSucesso();
    // }
}

function formataDados() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let nomeCompleto = nome + " " + sobrenome;
    let data = document.getElementById("data").value;
    let descricao = document.getElementById("descricao").value;
    let cidade = document.getElementById("cidade").value;
    let bairro = document.getElementById("bairro").value;
    let rua = document.getElementById("rua").value;
    let frequencia = document.getElementById("frequencia").value;
    let dadosInput = {
        nome: nomeCompleto,
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

function constroiAlertaSucesso() {
    var divAlertaSucesso = document.createElement("div");
    divAlertaSucesso.innerHTML = `
    <div class="alert alert-success d-flex align-items-center" role="alert">
        <div>Coleta cadastrada com sucesso! Você pode checá-la no <button><a href="../Telas/muralCadastros.html">mural de cadastros</button>.</div>
    </div>`;
    alertaSucesso.append(divAlertaSucesso);
}
