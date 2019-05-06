"use strict";


const app = require ("express") ();

app. set ("view engine", "pug");

app. get ("/", (req, res) => {

  res. render ("int");

});

app. listen (3000);
