// const CoinGecko = require('coingecko-api');
// const CoinGeckoClient = new CoinGecko();
const db = require('../database/transactions.js');


// module.exports.CoinGeckoClient = {
//   getPrice: async (params)=> {
//     let data = await CoinGeckoClient.simple.price({
//       ids: params.coin,
//       vs_currencies: 'usd',
//     })
//   }
// }
module.exports = {
  getAll: (req, res) => {
    db.find()
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(404))
  },

  add: (req, res) => {
    console.log(req.body);
    let transaction = req.body;
    db.add(transaction)
      .then(() => res.status(201).send())
      .catch(err => {res.status(500); console.log('error posting transaction')})
  }
}