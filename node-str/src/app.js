const express = require('express');

const app = express();
const router = express.Router();

//configurando uma rota
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node store API",
        version: "0.0.1"
    });
});

//onde está a barra pode ser colocada outro prefixo para a rota ex: /carro/marca/bmw/...
app.use('/',route);

module.exports = app;