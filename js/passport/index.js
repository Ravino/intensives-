"use strict";


const passport = require ("passport");

const localStrategy = require ("./strategys/local.js");



passport. use (localStrategy);

passport. serializeUser (function (user, done) {
  done(null, user);
});


passport. deserializeUser (function (user, done) {
    done(null, user);
});


module. exports = passport;
