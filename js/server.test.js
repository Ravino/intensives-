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


const app = require ("express") ();


const bodyParser = require ("body-parser");
const cookieParser = require ("cookie-parser");

const compileSass = require ("express-compile-sass");
const compilerLess = require ("express-compiless");

const serveStatic = require ("serve-static");


app. use (cookieParser ());

app. use (bodyParser. json ());
app. use (bodyParser. urlencoded ({ "extended": true}));

const staticDir = "./static";
app. use (serveStatic ("./static"));



let less = require ("less");
var staticCompiler = require('express-static-compiler');

app. use('/static', staticCompiler('static', {
    extensions: [".less"],
    processor: function(data, cb, filename, req){
        less.render(data, function (e, output) {
            cb(e, output ? output.css : null);
        });
    }
}));



app. use (compileSass ({
  "root": staticDir,
  "sourceMap": true,
  "sourseComments": true,
  "watchFiles": true,
}));

//app. use ("/less", compilerLess (staticDir));



app. get ("/", (req, res) => {

  res. render ("index.pug", { "page": page, });

});



app. get ("/support", (req, res) => {

  res. render ("support.pug");

});


app. listen (3000);
