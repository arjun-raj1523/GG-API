var express = require('express');
var router = express.Router();




router.get('/',function(request,response){

// Get a database reference to our blog
var db = admin.database();
var ref = db.ref("server/");
var usersRef = ref.child("users");

  // usersRef.child("alanisawesome").set({
  //   date_of_birth: "June 23, 1912",
  //   full_name: "Alan Turing"
  // });
  // usersRef.child("gracehop").set({
  //   date_of_birth: "December 9, 1906",
  //   full_name: "Grace Hopper"
  // });

});

//Call on Account Create Success
router.get('/add/:userid/:username',function(request,response){

// Get a database reference to our blog
var db = admin.database();
var ref = db.ref("server");
var usersRef = ref.child("users");

var userid = request.params.userid;
var username = request.params.username;

  usersRef.push().set({
    name: username,
    userid: userid,
    goals:""
  },function(error){
    if(error){
      console.log("Error");
    }
    else
      response.send("Done");
  });


});

router.get('/update',function(request,response){

  // Get a database reference to our blog
  var db = admin.database();
  var ref = db.ref("server/saving-data/fireblog");
  var usersRef = ref.child("users");
  usersRef.update({
    "alanisawesome/goals": "",
    
  });

});


//Add Goal for user.
router.get('/addgoal/:userid/:goalName/:goalType',function(request,response){

  var db = admin.database();
  var ref = db.ref("server");
  var userid = request.params.userid;
  var userKey = "";
  var goalName = request.params.goalName;
  var goalType = request.params.goalType;
  var ref = db.ref("server/users");
  ref.once("value", function(snapshot) {
  //Go through each key
    snapshot.forEach(function(data) {
      if(data.val().userid == userid){
        userKey=data.key;
        // // we can also chain the two calls together
        var goalRef = ref.child(userKey+"/goals");
        goalRef.push().set({
          goalName:goalName,
          goalType:goalType
        },function(error){
          if(!error){
            response.send("Added");
          }
        });
      }
    });
  });





});



module.exports = router;
