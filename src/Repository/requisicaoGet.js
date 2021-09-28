const mongoose = require("mongoose");
const cadastroModel = require("../Entity/cadastroColetaModel.js");

const uri =
    "mongodb+srv://guilhermeadmin:48HcxjUdkQXFGgFW@cadastrocoleta.voyjv.mongodb.net/cadastroColeta?retryWrites=true&w=majority";

module.exports = {
    getCadastro: async function getCadastro() {
        mongoose.connect(uri);
        return await cadastroModel.find();
    },
};
