"use strict";


const page = {

  "title": "signin",

  "header": "SignIn",

};


const router = require ("router") ();
const passport = require ("passport");




router. get ("/", (req, res)  => {

  res. render ("signin.pug", { "page": page});

});




router. post ("/", passport. authenticate ("local"), (req, res) => {

  console. log (req. body);

});


module. exports = router;
