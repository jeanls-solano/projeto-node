'use strict';

const express = require('express');
const router = express.Router();
//get = reseber informacoes post = enviar  informacoes
//put = atualizar(parecido com o set)   delet = excluir
//configurando uma rota
//(req = request, res = resposta, next)
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node store API",
        version: "0.0.2"
    });
});

module.exports = router;