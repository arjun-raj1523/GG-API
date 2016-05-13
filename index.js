var express = require('express')
var app = express()
app.set('port', (process.env.PORT || 5000));
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
      collection.find({email:"arjraj1523@gmail.com"}).toArray(function(err, items) {
        res.json(items);
      });
    }
    else {
      return console.log(err);
    }
  });
});

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
