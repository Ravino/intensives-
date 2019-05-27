"use strict";



const crypto = require ("crypto");


const local = require ("passport-local"). Strategy;


const conf = {

  "usernameField": "login",

  "passwordField": "password",

  "session": true,

};




module. exports = new local (conf, (login, password, done) => {

  const users = global. db. getData ("/users");


  const passwordHash = crypto. createHash ("sha512"). update (password). digest ("hex");


  for (let i = 0; i < users. length; i++) {

    if (users [i]. login !== login) {

      console. log ("error auth, login not equ");


      return done (null, false);

    }


    if (users [i]. password !== passwordHash) {

      console. log ("error auth, not equ password");


      return done (null, false);

    }


    return done (null, users [i]);

  }

});
