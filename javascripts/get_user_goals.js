var express = require('express');
var router = express.Router();


/*
  To Get JSON for specific email id
*/
router.get('/:id', function(request, response){
  //Create Variable for id
  var db = admin.database();
  var ref = db.ref("restricted_access/secret_document");
  ref.once("value", function(snapshot) {
    console.log(snapshot.val());
    response.send(snapshot.val());
  });

});

/*
  To get JSON for all user ID
*/

router.get('/', function(request, response){
  //Connect to DB
  console.log("Works");
  response.send("Works");

});

module.exports = router;
