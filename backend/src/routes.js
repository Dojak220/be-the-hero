const express = require('express');
const routes = express.Router();

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionsController = require('./controllers/sessionsController');



routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.post('/session', sessionsController.create);
routes.get('/profile', profileController.index);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;
