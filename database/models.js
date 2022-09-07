const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
  date: String,
  coin: String,
  amount: String,
  buy_price: String,
  invested: String,
  notes: String
})

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;