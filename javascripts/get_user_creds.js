var express = require('express');
var router = express.Router();
//for Encryption
var sha1 = require('sha1');
var MongoClient = require('mongodb').MongoClient;

/*
  To Get JSON for specific email id
*/
router.get('/:username/:password', function(req, res){
  //Connect to DB
  var username = req.params.username;
  var password = req.params.password;

  MongoClient.connect("mongodb://ggadmin:khiladi720@ds045521.mlab.com:45521/gg_user", function(err, db) {
    //No Error in connecting to DB
    if(!err) {
      //Collection Variable to get Data
      var collection = db.collection('gg_login');
      //MongoDB select statement with hardcoded value
      collection.find({username:username}).toArray(function(err, items) {
        //for no error in finding username
        if(!err){
        if(sha1(password) ==items[0].password){
          var authentication = JSON.parse('{"Authentication":"Success"}');
          res.json(authentication);
        }
        else {
          var authentication = JSON.parse('{"Authentication":"Failure password"}');
          res.json(authentication);
        }
      }

      else{
        var authentication = JSON.parse('{"Authentication":"Failure username"}');
        res.json(authentication);
      }
      });
    }
    else {
      var authentication = JSON.parse('{"Authentication":"Failure DB connection"}');
      res.json(authentication);
    }
  });
});

/*
  To get JSON for all user ID
*/

router.get('/', function(req, res){
  res.send("Nice Try");
});
router.get('/:username', function(req, res){
  res.send("Nice Try");
});
module.exports = router;
