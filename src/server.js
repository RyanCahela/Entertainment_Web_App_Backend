import express from "express";
import fs from 'fs';

const app = express();

app.listen(process.env.PORT || 5000);

app.get("/", (req, res) => {
  fs.readFile("./src/data.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      const jsonData = JSON.parse(data);
      res.status(200).json(jsonData);
    }
  });
});


/*

get '/api/recommended' all movies randomly sorted  

*/
