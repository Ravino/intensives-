"use strict";






const app = require ("express") ();


const bodyParser = require ("body-parser");
const cookieParser = require ("cookie-parser");
const session = require ("express-session");

const compileSass = require ("express-compile-sass");
const compilerLess = require ("express-compiless");



const jsonDb = require ("node-json-db");


const passport = require ("./passport/index.js");
const routes = require ("./routes/index.js");


const serveStatic = require ("serve-static");



global. db = new jsonDb ("db", true, false);


app. use (cookieParser ());

app. use (bodyParser. json ());
app. use (bodyParser. urlencoded ({ "extended": true}));

app. use (session ({ "secret": "keyboard cat", "resave": true, "saveUninitialized": true }));

const staticDir = "./static";
app. use (serveStatic ("./static"));


app. use (passport. initialize ());
app. use (passport. session ());



app. use (compileSass ({
  "root": staticDir,
  "sourceMap": true,
  "sourseComments": true,
  "watchFiles": true,
}));




app. use ("/", routes);



app. listen (3000);
