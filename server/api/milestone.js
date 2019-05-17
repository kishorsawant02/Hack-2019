var express = require('express');
var router = express.Router();
var dbConnector = require('../utils/connector');

var mock = require('../mock/milestone');

router.get('/retrieve', function(req, res) {
    res.status(200);
    res.send(mock);
});

router.post('/add', function(req, res) {
    console.log('Payload',  req.body);
    res.status(200);
    res.send('Milestone Added');
});

module.exports = router;