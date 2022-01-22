const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
//aplicacão está usando o boduParser convertido para json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));//funcão url encoded = codificar as url

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

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({
        id: id,
        item: req.body
    });
});

const del = router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
});
//onde está a barra pode ser colocada outro prefixo para a rota ex: /carro/marca/bmw/...
app.use('/', route);
app.use('/products', create);
app.use('/products', put);
app.use('/products', del);

module.exports = app;