var express = require('express');
var router = express.Router();
var Dealer = require("../models/dealer");
var _ = require('underscore');
var async = require('async');
var googleMapsClient = require('@google/maps').createClient({  key: 'AIzaSyB-fuziJ5-UqDxiEcFsfqff2GWZjEQQ1ts' });

router.get('/api/get', function(req, res) {
  Dealer.find(function(err, data){
    if(err || data === null) {
      var error = {status:'ERROR', message: 'Could not find dealer'};
      return res.json(error);
    }
    res.json(data);
  })
})
router.get('/dealers', function(req, res, next) {
  res.render('pages/dealers');
});

router.get('/about', function( req, res, next ) {
  res.render('pages/about');
});
router.get('/collections', function( req, res, next ) {
  res.render('pages/collections');
});

router.get('/seed', function(req, res, next) {
  Dealer.find(function(err, results) { // getting all documents in MongoDB
    if (err) {
      console.log(err);
    } else {
      async.eachSeries(results, function(result, done){ // Traversing all documents in series (one at a time)
        var curr = result; // Current address that we're working on
        googleMapsClient.geocode({ address: curr.address }, function(err, response) {  // Call Maps API for GeoCode
          var latLong = response.json.results[0].geometry.location;
          var location = [ latLong.lng, latLong.lat ]; // Build 2dsphere (Special DB index) [long,lat]
          Dealer.update( // Update the MongoDB document with the Lat/Long we just found from the Maps API
            { address: curr.address }, // Conditional/Query
            {$set: {location: location}}, // set this data into the matched documents
            function(err){
              if (err) {
                return res.send(500, { error: err });
              } else {
                console.log('success');
                done(); // tell the async library that we are finished with the current address and to move onto the next one
              }
            }
          );
        });
      });
    }
  });
});

router.get('/', function(req, res, next) {
  Dealer.find({}, function( err, dealers ) {
    if (err) {
      console.log( 'error: ', err );
    } else {
      res.render('pages/dealers', { dealers: dealers });
    }
  })
});
module.exports = router;
