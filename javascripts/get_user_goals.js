var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/*
  To Get JSON for specific email id
*/
router.get('/:id', function(req, res){
  //Create Variable for id
  var user_id = req.params.id;
    //Connect to DB
  MongoClient.connect("mongodb://ggadmin:khiladi720@ds045521.mlab.com:45521/gg_user", function(err, db) {
    if(!err) {
      //Collection Variable to get Data
      var collection = db.collection('gg_user_goals');
      //MongoDB select statement with hardcoded value
      collection.find({userid:user_id}).toArray(function(err, items) {
        res.json(items);
      });
    }
    else {
      return console.log(err);
    }
  });
});

/*
  To get JSON for all user ID
*/

router.get('/', function(req, res){
  //Connect to DB
  var emailID = req.params.emailID;

  MongoClient.connect("mongodb://ggadmin:khiladi720@ds045521.mlab.com:45521/gg_user", function(err, db) {
    if(!err) {
      //Collection Variable to get Data
      var collection = db.collection('gg_user_goals');
      //MongoDB select statement with hardcoded value
      collection.find({}).toArray(function(err, items) {
        // To get User ID. console.log(items[0]._id);
        res.json(items);
      });
    }
    else {
      return console.log(err);
    }
  });
});

module.exports = router;