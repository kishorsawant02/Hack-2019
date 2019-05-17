const express = require('express');
const router = express.Router();
const _ = require('lodash');
const dbConnector = require('../utils/connector');
const mock = require('../mock/awards');

router.get('/byId/:id', function(req, res) {
    res.status(200);
    res.send({
        status: 'OK',
        data:mock
    });
});

router.get('/byCategory/:id', function(req, res) {
    res.status(200);
    res.send({
        status: 'OK',
        data:mock
    });
});

router.post('/add', function(req, res) {
    res.status(200);
    res.send('Add Award');
});

module.exports = router;

/*
var id = req.params.id;
dbConnector.getConnection(function(error, connection) {
    if (error) {
        errorHandler.connectionError(error, connection, res);
    } else {
        var query = 'select * from award where aid = ' + id + ';';
        dbConnector.operation(query, connection, function(error, result, field) {
            if (error) {
                errorHandler.queryError(error, res);
            } else {
                res.status(200);
                res.send(result);
            }
        });
    }
});*/