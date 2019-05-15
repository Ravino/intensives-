"use strict";


const local = require ("passport-local"). Strategy;


const conf = {

  "usernameField": "login",

  "passwordField": "password",

};




module. exports = new local (conf, (login, password, done) => {

  console. log (login + " " + password);

});
