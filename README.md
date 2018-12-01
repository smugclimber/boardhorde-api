# boardhorde-api

Quikc dirty Instructions: 
git clone 


npm init (creates package.json)
-> entry point file name : server.js

follow prompts

npm install body-parser cors mongoose express

npm install nodemon --save-dev


server.js contents
// server.js

let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');

    const app = express();
    var port = process.env.PORT || 4000;

    var server = app.listen(function(){
        console.log('Listening on port ' + port);
    });
