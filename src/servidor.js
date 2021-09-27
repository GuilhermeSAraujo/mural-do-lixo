var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var requisicaoPost = require("./Repository/requisicaoPost.js");
var requisicaoGet = require("./Repository/requisicaoGet.js");

var app = express();
app.use(bodyParser.json());

app.use(
    cors({
        origin: "http://127.0.0.1:5500",
        optionsSuccessStatus: 200,
    })
);

app.post("/", function (req, res) {
    requisicaoPost.postCadastro(req.body);
});

app.get("/cadastros", function (req, res) {
    var cadastros = requisicaoGet.getCadastro(req.body);
    console.log(cadastros);
    // res.send(cadastros);
});

app.listen(3000, function () {
    console.log("Example app listening on port 3000.");
});
