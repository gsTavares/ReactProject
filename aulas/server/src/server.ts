//Requisições

//GET: Buscar ou Listar
//POST: Criar uma nova informação
//PUT: Atualizar uma informação
//DELETE: Deletar informações

//Parâmetros

//Corpo (Request Body) => dados para criação ou atualização de um registro (request.body)
//Route Params: Identificar qual recurso eu quero atualizar ou deletar (indicado por ':') (request.params)
//Query Params: Paginação, filtros, parâmetros (request.querys)

import express, { json } from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json()); // -> Entende as requisições como obejtos .JSON
app.use(routes);


app.listen(3333);

