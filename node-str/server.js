//no node o servidor se auto gerencia, recebe request.
'use strict' //auxilia em erros de sintaxe 

//um require sem caminho "./" irá procurar ná pasta node_modules o arquivo 
const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');
const { version } = require('process');
const { type } = require('express/lib/response');


const app = express();
const port = normalizePort(process.env.PORT || '3000');
app.set('port',port);//a porta foi setada então o app.set = 3000 = port

//criando o servidor baseado no "app" que foi exportando do "express"
const server = http.createServer(app);
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

//essa funcão faz o cervidor ficar "ouvindo" essa rota
server.listen(port);
server.on('error', onError);

console.log(port);

//funcão para definir uma porta disponível 
function normalizePort(val){
    const port = parseInt(val,10);

    if(isNaN(port)){
        return val;
    }
    if(port => 0){
        return port
    }
    return false;
}
// funcão para tratar erros relacionados ao cervidor
function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe' + port:
        'Port' + port;

    switch (error.code){
        case 'EACCES':
            console.log(bind+ ' require elevated privileges');
            process.exit(1)
            break;
        case 'EADDRINUSE':
            console.log(bind+ ' is already in use');
            process.exit(1)
            break;
        default:
            throw error;
    }
}   