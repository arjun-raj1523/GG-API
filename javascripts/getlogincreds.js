var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  //Connect to DB
  var MongoClient = require('mongodb').MongoClient;
  MongoClient.connect("mongodb://ggadmin:khiladi720@ds045521.mlab.com:45521/gg_user", function(err, db) {
    if(!err) {
      //Collection Variable to get Data
      var collection = db.collection('gg_login');
      //MongoDB select statement with hardcoded value
      collection.find({email:"arjraj1523@gmail.com"}).toArray(function(err, items) {
        res.json(items);
      });
    }
    else {
      return console.log(err);
    }
  });

});

module.exports = router;
