'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controlles/productController');
//get = reseber informacoes post = enviar  informacoes
//put = atualizar(parecido com o set)   delet = excluir
//configurando uma rota
//(req = request, res = resposta, next)

router.post('/', controller.post);
router.put('/:id',controller.put);
router.delete('/',controller.delete);

//exportando as rotas
module.exports = router;