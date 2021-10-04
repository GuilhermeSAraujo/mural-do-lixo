const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const CadastroController = require("./Controllers/cadastroController.js");


const app = express();
app.use(bodyParser.json());

app.use(
    cors({
        origin: "http://127.0.0.1:5500",
        optionsSuccessStatus: 200,
    })
);

const cadastroController = new CadastroController();

app.post("/cadastros", cadastroController.postCadastro);

app.get("/cadastros", cadastroController.getCadastro);

//app.update(atualizar cadastro)

app.listen(3000, function () {
    console.log("Example app listening on port 3000.");
});
