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

  res. render ("index.pug", { "page": page });

});




router. use ("/support", require ("./support.js"));
router. use ("/signin", require ("./signin.js"));


module. exports = router;
