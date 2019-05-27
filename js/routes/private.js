"use strict";




const router = require ("router") ();




router. get ("/", (req, res) => {

    if (!req. isAuthenticated ()) {
  
    res. redirect ("/");
    
    
    return true;
  }


  res. send ("user private page");
});


module. exports = router;
