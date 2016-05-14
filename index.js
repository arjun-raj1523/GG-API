var express = require('express')
var app = express()
var path = require('path');
var bodyParser = require("body-parser");
app.set('port', (process.env.PORT || 5000));

//For POST method
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Modular Declaration
var get_user_creds = require('./javascripts/get_user_creds');
var put_user_creds = require('./javascripts/put_user_creds');
var put_user_goals = require('./javascripts/put_user_goals');
app.use('/get_user_creds',get_user_creds);
app.use('/put_user_creds',put_user_creds);
app.use('/put_user_goals',put_user_goals);

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.sendFile(__dirname + '/entergoal.html');
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

module.exports = app;
