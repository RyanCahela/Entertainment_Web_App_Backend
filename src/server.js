import express from "express";
import * as fs from "fs";

const app = express();

app.listen("5000");

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello from the server!</h1>")
});


/*

get '/api/recommended' all movies randomly sorted  

*/
