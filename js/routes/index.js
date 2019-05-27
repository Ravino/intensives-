"use strict";


const page = {

  "title": "Главная страница",

  "header": "Привет, мир!",

  "footer": "Пока, мир!",

  "menu": [
{ "href": "/", "name": "hello", },
{ "href": "/support", "name": "support", },
],
};


const router = require ("router") ();


router. get ("/", (req, res) => {

  console. log (req. isAuthenticated ());


  console. log (req. session);
  
  if (req. isAuthenticated ()) {

    res. redirect ("/private");


    return true;

  }

  res. render ("index.pug", { "page": page });

});




router. use ("/support", require ("./support.js"));
router. use ("/signin", require ("./signin.js"));


router. use ("/private", require ("./private.js"));
router. use ("/*", (req, res) => res. send ("404 not found"));


module. exports = router;
