import express from "express";
import fs from 'fs';
import cors from 'cors';
import morgan from 'morgan';
import {v4 as uuidv4} from 'uuid';


const app = express();
app.use(morgan('tiny'));
app.use(cors({origin: "*"}));
app.get("/", (req, res) => {
  fs.readFile("./src/data.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      let jsonData = JSON.parse(data);

      const jsonDataWithIds = jsonData.map((mediaObject) => {
        return {
          ...mediaObject,
          id: uuidv4()
        }
      });

      res.status(200).json(jsonDataWithIds);
    }
  });
});

app.listen(process.env.PORT || 5000);

/*

get '/api/recommended' all movies randomly sorted  

*/
