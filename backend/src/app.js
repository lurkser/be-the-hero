const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const {errors} = require('celebrate');
//importa e usa express
const app = express();

app.use(cors({}));
//explica pro express que é pra converter o json pra javascript object
app.use(express.json());
app.use(routes);
app.use(errors());
//npm start no console pra executar o backend com nodemon
//Rota o endereco no browser/ Recurso esse parametro depois da barra

/**
 * Métodos HTTP: 
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros
  * 
  * Query params: parâmetros nomeados enviados na rota após "?" (filtros, paginação)
  * Route params: parâmetros utilizados pra identificar recursos "/:id"
  * Request body: Corpo da requisição utilizado para criar ou alterar recursos
  */

  /**
   * Banco de dados
   * 
   * Driver: SELECT * FROM users
   * Query builder: table('users').select('*').where()
   */


module.exports = app;