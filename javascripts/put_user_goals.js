var express = require('express');
var router = express.Router();




router.get('/',function(request,response){

// Get a database reference to our blog
var db = admin.database();
var ref = db.ref("server/saving-data/fireblog");
var usersRef = ref.child("users");
  usersRef.child("alanisawesome").set({
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
  });
  usersRef.child("gracehop").set({
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  });

});

router.get('/add',function(request,response){

// Get a database reference to our blog
var db = admin.database();
var ref = db.ref("server/saving-data/fireblog");
var usersRef = ref.child("users");
  usersRef.child("alanisawesweome").set({
    date_of_birth: "June 23, 1912",
    full_name: "Alwe Turing"
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

router.get('/addlist/:userid',function(request,response){
  var db = admin.database();
  var ref = db.ref("server/saving-data/fireblog");

  var postsRef = ref.child("users/"+request.params.userid+"/goals");


  // we can also chain the two calls together
  postsRef.push().set({
    author: "alanisawesome",
    title: "The Turing Machine"
  },function(error){
    if(!error){
      response.send("Added");
    }
  });

});



module.exports = router;
