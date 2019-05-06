"use strict";

const express = require ("express");
const app = express ();



app. get ("/", (req, res) => {
  console. log ("test");
  res. send ("hello");
});


app. listen (3000);
