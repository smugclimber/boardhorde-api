const config = require ('./config.json');
const mongoose = require ("mongoose");

mongoose.connect(process.env.MONGODB_URI || config.connectionString);

mongoose.Promise = global.Promise;
module.exports = {
    Event : require ('../events/event.model')
};



