const URL_TO_GET = "http://localhost:3000/cadastros";
window.addEventListener("load", realizaRequisicaoGet);

async function realizaRequisicaoGet() {
    let response = await fetch(URL_TO_GET, {
        method: "GET",
    });
    let data = await response.text();
    imprimeDadosNaTela(data);
}

function imprimeDadosNaTela(dados) {
    dados = JSON.parse(dados);
    let body = document.getElementById("muralCadastros");
    let container = document.createElement("div");
    container.className = "container";
    body.appendChild(container);
    let linha = document.createElement("div");
    linha.className = "row";
    container.appendChild(linha);
    dados.forEach((cadastro, index) => {
        let divCard = document.createElement("div");
        divCard.className = "card text-white bg-primary mb-3";
        divCard.style = "max-width: 18rem";
        let nome = cadastro.nome;
        let nomeCard = document.createElement("div");
        nomeCard.className = "card-header";
        nomeCard.textContent = nome;
        let corpoCard = document.createElement("div");
        corpoCard.className = "card-body";
        let tituloCard = document.createElement("h5");
        tituloCard.className = "card-title";
        let conteudoCard = document.createElement("p");
        let rua = cadastro.rua;
        let bairro = cadastro.bairro;
        let cidade = cadastro.cidade;
        let data = cadastro.data;
        let descricao = cadastro.descricao;
        let frequencia = cadastro.frequencia;

        let textoCard = formataConteudoCard(
            rua,
            bairro,
            cidade,
            data,
            descricao,
            frequencia
        );
        conteudoCard.textContent = textoCard;

        divCard.appendChild(nomeCard);
        nomeCard.appendChild(corpoCard);
        corpoCard.appendChild(tituloCard);
        tituloCard.appendChild(conteudoCard);
        if (index % 3 === 0) {
            // cria nova row
            let divColuna = document.createElement("div");
            divColuna.className = "col";
            linha.appendChild(divColuna);
            divColuna.appendChild(divCard);
            body.appendChild(linha);
        } else {
            let divColunaIncial = document.createElement("div");
            divColunaIncial.className = "col";
            linha.appendChild(divColunaIncial);
            divColunaIncial.appendChild(divCard);
            body.appendChild(divColunaIncial);
        }
    });
    console.log(body);
}

function formataConteudoCard(rua, bairro, cidade, data, descricao, frequencia) {
    return (
        "Rua " +
        rua +
        "Bairro " +
        bairro +
        " Cidade " +
        cidade +
        " Data: " +
        new Date(data).toLocaleDateString("pt-BR") +
        " Descrição: " +
        descricao +
        " Frequência: " +
        frequencia +
        "x por semana"
    );
}
