const knex = require('knex'); //API para criação de tabelas
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configuration.development : configuration.development;

const connections = knex(config);

module.exports = connections;