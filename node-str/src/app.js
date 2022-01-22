const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//carregar as rotas
const indexRoute = require('./routes/indexRoute');
const productRoute = require('./routes/productRoutes');

//aplicacão está usando o boduParser convertido para json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));//funcão url encoded = codificar as url

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
app.use('/', indexRoute);
app.use('/products', productRoute);


module.exports = app;