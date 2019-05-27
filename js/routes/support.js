"use strict";

const router = require ("router") ();


router. get ("/support", (req, res) => {

  if (req. isAuthenticated ()) {
  
    res. redirect ("/private");
    
    
    return true;
  }
  res. render ("support.pug");

});



module. exports = router;
