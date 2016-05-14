var express = require('express')
var app = express()
var path = require('path');
app.set('port', (process.env.PORT || 5000));



//Module Testing
var login = require('./javascripts/getlogincreds');
app.use('/user',login);


//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

module.exports = app;
