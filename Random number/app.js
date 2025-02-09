const express = require('express');

const app = express();
const port = 3000;

app.listen(port,() => (console.log(`App is listening on port ${port}`)));

app.get("/coinFlip", (req,res) => {
  const times = parseInt(req.query.times) || 1;
  const results = [];
  for(i=0; i<times;i++){
    results[i]= Math.random() < 0.5 ? 'Heads' : 'Tails';
  }
  res.status(200).json ({ result: results});
});

app.get("/diceRoll", (req,res) => {
  const times = parseInt(req.query.times) || 1;
  const results = [];
  for(i=0; i<times; i++){
    results[i] = Math.floor(Math.random() * 6) + 1;
  }
  res.status(200).json({ result: results});
});

app.get("/randomNumber", (req,res) => {
  const min = parseInt(req.query.min) || 1;
  const max = parseInt(req.query.max) || 100;
  if (min >= max){
    return res.status(400).json({error: 'Min should be less than max.'});
  }
  const result = Math.floor(Math.random() * (max - min + 1)) +min;
  res.status(200).json({ result: result});
});

//Mimo handles all npm dependencies 