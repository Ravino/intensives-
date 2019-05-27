"use strict";


const jsonDb = require ("node-json-db");


const db = new jsonDb ("db", true, false);


const user = {

  "id": 1,
  "login": "user",
  "password": "123456789",
  "name": "user",
  "lastname": "user",
};



console. log (db. getData ("/users"));
