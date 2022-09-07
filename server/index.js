const express = require('express');
const path = require('path');
const axios = require('axios');
// const Bundler = require('parcel-bundler');
const app = express();
const controller = require('./controllers.js');


app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/price', (req, res)=> {
  const id = req.query.id;
  return axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`)
    .then(response=>{
      res.status(200).send(response.data);
    })
    .catch(err => console.log(err));
})

app.get('/transactions', controller.getAll);

app.post('/transactions', controller.add);
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(8080, ()=> {
  console.log('Listening at http://localhost:8080');
});
