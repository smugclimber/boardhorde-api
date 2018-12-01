// server.js

let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');

    const app = express();
    var port = process.env.PORT || 5000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    app.set('port', (process.env.PORT || 5000));

    app.listen(app.get('port'), () => {
        console.log('The server is running at localhost:', app.get('port'));
    });

    app.all('*', function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

app.use(cors());

// Defined get data(index or listing) route
app.use(function(req, res, next) { 
    res.send({message: "Successfully hit BoardHorde API"});

});
// Duplicate with the line above?????
app.get('*', (req, res) => res.status(404).send({
    status: false,
    message: "No matching route!"
}));
var server = app.listen(function(){
    console.log('Listening on port ' + port);
});
