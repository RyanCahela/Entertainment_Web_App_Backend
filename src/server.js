import express from "express";

const app = express();

app.listen(process.env.PORT || 5000);

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello from the server!</h1>")
});


/*

get '/api/recommended' all movies randomly sorted  

*/
