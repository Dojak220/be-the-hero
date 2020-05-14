/*


const express = require('express');
const app = express();

// Avisando para o app que as requisições serão feitas em json
app.use(express.json())

/**
 * Exemplo de rota: 'localhost:3333/users'
 * Nessa rota, o recurso é o 'users'
*/

/**
 * Métodos HTTP:
 * 
 * GET: é usado quando queremos BUSCAR alguma informação do back-end
 * POST: é usando quando queremos CRIAR alguma informação do back-end
 * PUT: é usando quando queremos MODIFICAR alguma informação do back-end
 * DELETE: é usando quando queremos APAGAR alguma informação do back-end
*/

/**
 * Tipos de parâmetros:
 * 
 * 1 - Query params: parâmetros nomeados enviados na rota após o '?' (filtros, paginação)
 * 2 - Route params: parâmetros utilizados para identificar recursos ou informações mais específicas dos recursos.
 * 3 - Request body: Corpo da requisição, utilizado pra criar ou alterar recursos.
 * 
 * 1 -> Exemplo: http://localhost:3333/users?Evento=Dorgival&idade=22&page=2
 * 2 -> Exemplo: http://localhost:3333/users/:id=Dorgival
 * 3 -> Exemplo: 
*/

/**
 * Duas principais alternativas de bancos de dados na atualidade

 * SQL (relacional): MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Service 
 * É o mais utilizado no mercado e o que temos o maior controle e maior estruturação
 * 
 * noSQL(não relacional): MongoDB, CouchDB etc
 * É mais livre, com menor estruturação, com elementos sem algumas características sem informação.
 * 
 * => O SQLite não precisa ser instalado, ele é gravado como um arquivo .sqlite dentro da aplicação. Além disso, ele é o mais utilizado no mercado. UJtilizaremos ele no nosso desenvolvimento
 * => O MongoDB é mais simples quando não precisamos de muita complexidade no que estamos fazendo, mas pode se tornar até mais complexo quando as informações dos bancos de dados se torna complexa demais.
*/

/**
 * Driver: SELECT * FROM users
 *  * este é específico do SQLite, nem sempre entendível por outros bancos de dados
 * 
 * Query Builder: table('users').select('*').where()
 *  * este é feito em JS e independe do tipo de banco de dados escolhido, podendo mudá-lo quando necessário.
 *  * utilizaremos o knex.js (knexjs.org)
 * 
*/

/**
 * 'request' é responsável por receber todas as requisições do usuário
 * 'response' é responsável por enviar todas as respostas do backend 
 * */
app.get('/users', (request, response) => {
    const querys = request.query; // recebe os querys params
    console.log(querys,"=> Query params");

    //return response.send("Hello World!!");
    return response.json({
        Evento: 'Semana OmniStack',
        Aluno: 'Dorgival Rocha',
        Mensagem: 'Seja bem vindo à página Backend'
    })
});

// Aqui, os routes params meio que criam novas rotas, entretanto, são dinâmicas. Mas não são rotas para novas páginas, são subrotas para elementos dentro da rota principal.
app.get('/users/:id', (request, response) => {
    const params = request.params; // recebe os routes params
    console.log(params, "=> Route params");

    //return response.send("Hello World!!");
    return response.json({
        Evento: 'Semana OmniStack',
        Aluno: 'Dorgival Rocha',
        Mensagem: 'Seja bem vindo à página Backend'
    })
});

app.post('/users', (request, response) => {
    const body = request.body; // recebe os routes params
    console.log(body, "=> Body request");

    //return response.send("Hello World!!");
    return response.json({
        Evento: 'Semana OmniStack',
        Aluno: 'Dorgival Rocha'
    })
});

app.listen(3333);