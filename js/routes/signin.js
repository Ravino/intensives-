"use strict";


const page = {

  "title": "signin",

  "header": "SignIn",

};


const router = require ("router") ();
const passport = require ("passport");




router. get ("/", (req, res)  => {

  if (req. isAuthenticated ()) {
  
    res. redirect ("/private");
    
    
    return true;
  }


  res. render ("signin.pug", { "page": page});

});




router. post ("/", passport. authenticate ("local"), (req, res) => {


  if (req. isAuthenticated ()) {
  
    res. redirect ("/private");
    
    
    return true;
  }
  console. log (req. body);
  res. redirect ("/");

});


module. exports = router;
