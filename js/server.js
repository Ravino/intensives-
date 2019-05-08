"use strict";






const app = require ("express") ();


const bodyParser = require ("body-parser");
const cookieParser = require ("cookie-parser");

const compileSass = require ("express-compile-sass");
const compilerLess = require ("express-compiless");


const routes = require ("./routes/index.js");


const serveStatic = require ("serve-static");


app. use (cookieParser ());

app. use (bodyParser. json ());
app. use (bodyParser. urlencoded ({ "extended": true}));

const staticDir = "./static";
app. use (serveStatic ("./static"));


app. use (compileSass ({
  "root": staticDir,
  "sourceMap": true,
  "sourseComments": true,
  "watchFiles": true,
}));




app. use ("/", routes);



app. listen (3000);
