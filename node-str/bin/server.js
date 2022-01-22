//um require sem caminho "./" irá procurar ná pasta node_modules o arquivo
const app = require('../src/app') 
const http = require('http');
const debug = require('debug')('nodestr:server');

const port = normalizePort(process.env.PORT || '3000');
app.set('port',port);//a porta foi setada então o app.set = 3000 = port

//criando o servidor baseado no "app" que foi exportando do "express"
const server = http.createServer(app);

//essa funcão faz o cervidor ficar "ouvindo" essa rota
server.listen(port);
server.on('error', onError);
server.on('listening',onListening);
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
// funcão para tratar erros relacionados ao servidor
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

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe' + addr
        : 'port' + addr.port;
    debug('Listening on' + bind);
}