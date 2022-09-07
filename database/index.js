const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/transactions');
const Transaction = require('./models.js');

const db = mongoose.connection;

db.on('error', ()=> {
  console.log('database connection error')
});

db.on('open', () => {
  console.log('database connected!')
});

module.exports = db;