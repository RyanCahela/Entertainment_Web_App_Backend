import express from "express";
import fs from 'fs';
import cors from 'cors';
import morgan from 'morgan';


const app = express();
app.use(morgan('tiny'));
app.use(cors({origin: "*"}));
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

app.listen(process.env.PORT || 5000);

/*

get '/api/recommended' all movies randomly sorted  

*/
