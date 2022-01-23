'use strict';
//nos controlles é onde será feito a conexão com o banco de dados
exports.post =(req, res, next) => {
    res.status(201).send(req.body);
};

exports.put =(req, res, next) => {
    const id = req.params.id;
    res.status(201).send({
        id: id,
        item: req.body
    });
};

exports.delete =(req, res, next) => {
    res.status(200).send(req.body);
}; 
