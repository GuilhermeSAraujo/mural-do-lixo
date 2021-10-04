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
    console.log(data);
    let body = document.getElementById("muralCadastros");
    data.forEach((cadastro) => {
        let elemento = `
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">Bruna Mourão Severiano</div>
                <div class="card-body">
                    <h5 class="card-title">Informações</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up  the bulk of
                        the card's
                        content.
                    </p>
                </div>
            </div>
        </div>`;
        body.appendChild(elemento)
    });
    console.log(data);
}
