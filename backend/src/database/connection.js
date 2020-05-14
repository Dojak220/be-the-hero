const knex = require('knex'); //API para criação de tabelas
const configuration = require('../../knexfile');

const connections = knex(configuration.development);

module.exports = connections;