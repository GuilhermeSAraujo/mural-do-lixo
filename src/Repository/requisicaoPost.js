const mongoose = require("mongoose");
const CadastroModel = require("../Entity/cadastroColetaModel.js");

const uri =
    "mongodb+srv://guilhermeadmin:48HcxjUdkQXFGgFW@cadastrocoleta.voyjv.mongodb.net/cadastroColeta?retryWrites=true&w=majority";

module.exports = {
    postCadastro: function postCadastro(requisicao) {
        mongoose.connect(uri);
        var db = mongoose.connection;
        var entidade = new CadastroModel({
            nome: requisicao.nome,
            data: requisicao.data,
            descricao: requisicao.descricao,
            endereco: {
                bairro: requisicao.bairro,
                cidade: requisicao.cidade,
                rua: requisicao.rua,
            },
        });
        entidade.save();
        console.log(entidade);
    },
};
