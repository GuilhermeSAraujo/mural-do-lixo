const mongoose = require("mongoose");
const cadastroModel = require("../Entity/cadastroColetaModel.js");

const uri =
    "mongodb+srv://guilhermeadmin:48HcxjUdkQXFGgFW@cadastrocoleta.voyjv.mongodb.net/cadastroColeta?retryWrites=true&w=majority";

module.exports = {
    getCadastro: function postCadastro(requisicao) {
        mongoose.connect(uri);
        var cadastro = cadastroModel.find({});
        return cadastro;
    },
};
