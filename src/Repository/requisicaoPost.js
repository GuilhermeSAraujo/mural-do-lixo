const mongoose = require("mongoose");
const CadastroModel = require("../Entity/cadastroColetaModel.js");

const uri =
    "mongodb+srv://guilhermeadmin:48HcxjUdkQXFGgFW@cadastrocoleta.voyjv.mongodb.net/cadastroColeta?retryWrites=true&w=majority";

module.exports = {
    postCadastro: function postCadastro(requisicao) {
        console.log(requisicao);
        mongoose.connect(uri);
        var db = mongoose.connection;
        var entidade = new CadastroModel({
            nome: requisicao.nome,
            data: requisicao.data,
            frequencia: requisicao.frequencia,
            descricao: requisicao.descricao,
            bairro: requisicao.endereco.bairro,
            cidade: requisicao.endereco.cidade,
            rua: requisicao.endereco.rua,
        });
        entidade.save();
    },
};
