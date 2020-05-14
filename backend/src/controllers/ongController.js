const connection = require('../database/connection'); //conexão/importação do banco de dados
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },
    async create(request, response){
        const { nome, email, whatsapp, cidade, uf } = request.body; 
        const id = crypto.randomBytes(4).toString('HEX');
        //console.log(data,"=> Query params");
        await connection('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
            cidade,
            uf,
        })
        return response.json({ id });
    }
};