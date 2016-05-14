var express = require('express');
var router = express.Router();

//Post Method
router.post('/',function(req,res){
  var MongoClient = require('mongodb').MongoClient;
  MongoClient.connect("mongodb://ggadmin:khiladi720@ds045521.mlab.com:45521/gg_user", function(err, db) {
    if(!err) {

      //Collection Variable to get Data
      var collection = db.collection('gg_login');

      //MongoDB insert into table
      collection.insert({
          email: req.body.email,
          password: req.body.password
      }, function(err, login_credientials){
          if (err) throw err;
      });
    }
    else {
      return console.log(err);
    }
  });
  res.end("yes");
});


module.exports = router;
