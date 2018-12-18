var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  name:  String,
  assocPlayers: [String],
  description:   String,
  game: [{ body: String, date: Date }],
  location: { type: Date, default: Date.now },
  gameStats: Boolean,
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Event', schema);