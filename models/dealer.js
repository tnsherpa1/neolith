var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MongooseUniqueValidator = require('mongoose-unique-validator');
var schema = new Schema({
  title: {type: String, required:true},
  address: {type: String, required:true},
  location: {type: [Number]},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

// Sets the created_at parameter equal to the current time
schema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now;
    }
    next();
});

// Indexes this schema in geoJSON format (critical for running proximity searches)
schema.index({location: '2dsphere'});

schema.plugin(MongooseUniqueValidator);
module.exports = mongoose.model('Dealer', schema);
