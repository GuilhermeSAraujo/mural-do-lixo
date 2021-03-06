var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const cadastroEntity = new Schema({
    nome: String,
    data: { type: Date, default: Date.now },
    frequencia: Number,
    descricao: String,
    bairro: String,
    cidade: String,
    rua: String,
});

var CadastroModel = mongoose.model("CadastroModel", cadastroEntity);

module.exports = CadastroModel;
