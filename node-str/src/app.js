const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//carregar as rotas
const indexRoute = require('./routes/indexRoute');
const productRoute = require('./routes/productRoutes');

//aplicacão está usando o bodyParser convertido para json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));//funcão url encoded = codificar as url

//onde está a barra pode ser colocada outro prefixo para a rota ex: /carro/marca/bmw/...
app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;