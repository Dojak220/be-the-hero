const { intersect } = require("../../src/database/connection")

const request = require("supertest");
const app = require('../../src/app')
describe('ONG',() => {
   it('should be able to create a new ONG', () => {
      const response = request(app)
      .post('/ongs')
      .send({
         nome: "APAD3",
         email: "contato@das.com",
         whatsapp: "89999999999",
         cidade: "Picos",
         uf: "PI"
      })

      console.log(response.body)
   });
})