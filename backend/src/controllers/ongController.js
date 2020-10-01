const connection = require('../database/connection'); //conexão/importação do banco de dados
const generateUniqueID = require('../utils/generateUniqueID')

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },
    async create(request, response){
        const { nome, email, whatsapp, cidade, uf } = request.body; 
        const id = generateUniqueID();
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