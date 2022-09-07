const db = require('./index.js');
const Transaction = require('./models.js');

module.exports = {
  find: () => {
    return db.find({});
  },

  add: (transactionObj) => {
    let newTransaction = new Transaction({
      coin: transactionObj.__,
      amount: transactionObj.___,
      buy_price:  transactionObj.___,
      invested: transactionObj.___
    });
    return newTransaction.save();
  }
}