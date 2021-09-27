const URL_TO_GET = "http://localhost:3000/cadastros";
window.addEventListener("load", realizaRequisicaoGet);


function realizaRequisicaoGet(){
    fetch(URL_TO_GET, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    }).then((response) => {
        
    });
}


