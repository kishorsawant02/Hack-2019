var express = require('express');
_ = require('lodash');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

module.exports = function() {
    /**
     * set client landing folder
     */
    app.use(express.static(path.join(__dirname, 'deploy')));

    var logger = require('./server/utils/logger');
    app.use(logger);

    /**
     *use body parser
     */
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    /**
     *Define dynamic routes
     */
    var routes = require('./server/routes');
    _.each(routes, function(controller, route) {
        app.use(route, controller);
    });

    app.use(express.static(path.join(__dirname, 'deploy')));

    //Request for static pages
    app.get('/deploy/:pageName?', function(req, res, next) {
        if (!req.params.pageName) {
            req.params.pageName = 'index.html';
            res.redirect(req.params.pageName);
        } else {
            res.sendFile(path.join(__dirname + '/deploy/' + req.params.pageName));
        }
    });

    /**
     *catch 404 and forward to error handler
     */
    app.use(function(err, req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        res.status(500).send({
            url: 'BAD_REQUEST'
        });
    });

    return app;
};