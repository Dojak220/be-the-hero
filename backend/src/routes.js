const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionsController = require('./controllers/sessionsController');

const routes = express.Router();

routes.get('/ongs', ongController.index);
routes.post('/ongs', celebrate({
   [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      cidade: Joi.string().required(),
      uf: Joi.string().required().length(2),
   })
}), ongController.create);

routes.post('/session', celebrate({
   [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
   })
}), sessionsController.create);
routes.get('/profile', celebrate({
   [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
   }).unknown(),
}), profileController.index);

routes.get('/incidents', celebrate({
   [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
   })
}), incidentController.index);


routes.post('/incidents', incidentController.create);

routes.delete('/incidents/:id', celebrate({
   [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
   })
}), incidentController.delete);

module.exports = routes;
