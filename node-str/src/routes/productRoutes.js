'use strict';

const express = require('express');
const router = express.Router();
//get = reseber informacoes post = enviar  informacoes
//put = atualizar(parecido com o set)   delet = excluir
//configurando uma rota
//(req = request, res = resposta, next)


router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({
        id: id,
        item: req.body
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
});

//exportando as rotas
module.exports = router;