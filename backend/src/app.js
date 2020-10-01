const express = require('express'); // biblioteca com as configurações básicas para as aplicações
const routes = require('./routes');
const { errors } = require('celebrate');
const cors = require('cors');

const app = express();

app.use(cors()); // Apenas isso é necessário para que o frontend se conecte com esse backend.

/**
 * Se eu estou em produção, preciso colocar o caminho que o frontend precisa percorrer para encontrar o backend.
 * app.use(cors({
 *  origin: 'http://meuapp.com'
 * }));
*/
app.use(express.json())
app.use(routes);
app.use(errors());

module.exports = app;