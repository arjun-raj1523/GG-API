var express = require('express');
var router = express.Router();


/*
  To Get JSON for specific email id
*/
router.get('/:userid', function(request, response){
  //Create Variable for id
  var db = admin.database();
  var ref = db.ref("server/users");
  var userid = request.params.userid;
  var flagFound = false;
  var dataObject = null;
  ref.once("value", function(snapshot) {
    //console.log(snapshot.val());
    
    snapshot.forEach(function(data){
      //response.send(data.val());
      if(data.val().userid == userid){
        flagFound = true;
        dataObject = data.val();
      }
    });
    if(flagFound)

      response.send({status:"true",data:dataObject});
    else
      response.send({status:"false"})

  });

});

/*
  To get JSON for all user ID
*/

router.get('/', function(request, response){
  //Connect to DB
  console.log("Works");

  var db = admin.database();
  var ref = db.ref("server/saving-data/fireblog/users/");
  ref.once("value", function(snapshot) {
  //Go through each key
  snapshot.forEach(function(data) {
    console.log("The " + data.key + " dinosaur's score is " + data.val().author);
  });
//All Data from users
    response.send(snapshot.val());
  });
});

module.exports = router;
