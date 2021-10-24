const URL_TO_GET = "http://localhost:3000/cadastros";
window.addEventListener("load", realizaRequisicaoGet);

async function realizaRequisicaoGet() {
    let response = await fetch(URL_TO_GET, {
        method: "GET",
    });
    let data = await response.text();
    imprimeDadosNaTela(data);
}

function imprimeDadosNaTela(data) {
    data = JSON.parse(data);
    let body = document.getElementById("muralCadastros");
    data.forEach((cadastro) => {
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

        
        conteudoCard.textContent = "Rua " + rua + " Bairro " + bairro + " Cidade " + cidade + " Data: " + data + " Descrição: " + descricao + " Frequência: " + frequencia + "x na semana";

        divCard.appendChild(nomeCard);
        nomeCard.appendChild(corpoCard);
        corpoCard.appendChild(tituloCard);
        tituloCard.appendChild(conteudoCard);

        body.appendChild(divCard);
    });
}
