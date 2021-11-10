require('dotenv').config();
const mongoose = require("mongoose");
const CadastroModel = require("../Entity/cadastroColetaModel.js");

const uri = process.env.URI;

class CadastroController {
    async getCadastro(request, response) {
        mongoose.connect(uri);
        const cadastros = await CadastroModel.find();       
        response.send(JSON.stringify(cadastros));
    }

    async postCadastro(request, response) {
        mongoose.connect(uri);
        var db = mongoose.connection;
        var entidade = new CadastroModel({
            nome: request.body.nome,
            data: request.body.data,
            frequencia: request.body.frequencia,
            descricao: request.body.descricao,
            bairro: request.body.endereco.bairro,
            cidade: request.body.endereco.cidade,
            rua: request.body.endereco.rua,
        });
        let retorno = await entidade.save();
        console.log(retorno);
        return response.sendStatus(201);
    }
}

module.exports = CadastroController;
