var express = require('express')
var app = express()
//Create MongoClient variable
var MongoClient = require('mongodb').MongoClient;
//Get user credentails
app.get('/users', function(req, res) {
  //Connect to DB
  MongoClient.connect("mongodb://ggadmin:khiladi720@ds045521.mlab.com:45521/gg_user", function(err, db) {
    if(!err) {
      //Collection Variable to get Data
      var collection = db.collection('gg_login');
      //MongoDB select statement
      collection.find({email:"arjun"}).toArray(function(err, items) {
        res.json(items);
      });
    }
    else {
      return console.log(err);
    }
  });
});
app.listen(3000)
