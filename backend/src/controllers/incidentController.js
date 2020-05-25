const connection = require('../database/connection');
//const crypto = require('crypto');

const LIMIT_PAGE = 5

module.exports = {
   async index(request, response) {
      const { page = 1 } = request.query;
      const [count] = await connection('incidents').count();

      const incidents = await connection('incidents')
         .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
         .limit(LIMIT_PAGE)
         .offset((page - 1) * LIMIT_PAGE)
         .select([
            'incidents.*',
            'ongs.nome',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.cidade',
            'ongs.uf'
         ]);

      response.header('X-Total-Count', count['count(*)']);
      return response.json(incidents);
   },

   async create(request, response) {
      const { titulo, descricao, valor } = request.body;
      const ong_id = request.headers.authorization
      console.log({ong_id})
      const [id] = await connection('incidents').insert({
         titulo,
         descricao,
         valor,
         ong_id,
      });
      return response.json({ id }) // vai retornar o id do caso cadastrado no sistema.
   },

   async delete(request, response) {
      const { id } = request.params;
      const ong_id = request.headers.authorization
      const incident = await connection('incidents')
         .where('id', id)
         .select('ong_id')
         .first();

      if (incident.ong_id !== ong_id) {
         return response.status(401).json({ error: 'Operação não permitida' });
      }

      await connection('incidents').where('id', id).delete();

      return response.status(204).send(); //resposta sem conteúdo, normalmente usada quando a operação teve sucesso, mas não há resposta. O send() envia uma página em branco.
   },
};