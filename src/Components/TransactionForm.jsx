import React, { useState, useEffect } from 'react';
const axios = require('axios');

function TransactionForm({assets, transactions, addTransaction, totalInvested, setTotalInvested,setPortfolio}) {
  const [date, setDate] = useState('');
  const [asset, setAsset] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('')
  const [transactionType, setTransactionType] = useState('buy');
  // const [currentPrice, setCurrentPrice] = useState('')
  // useEffect(()=> {

  // }, [assets])
  // const getPrice = (asset) => {
  //   let price = axios.get(`http://localhost:8080/price`)
  //     .then(res=> {
  //       return res.data[asset].usd;
  //     })
  //     .catch(err=> console.log(err));
  //     return price;
  // }

  const createTransaction = (event) => {
    event.preventDefault();
    let newTransaction = {
      date: date,
      coin: asset,
      amount: transactionType === 'buy' ? amount : -amount,
      notes: note,
      buy_price: price,
      invested: Number(price) * Number(amount)
      // transactionType: transactionType
    }
    addTransaction([...transactions].concat(newTransaction));
    setTotalInvested(prevState => prevState + newTransaction.amount * price);
    setPortfolio(prevState => {
      if (prevState[asset]) {
        return ({...prevState, [asset]: prevState[asset] + Number(newTransaction.amount)})
      } else {
        prevState[asset] = Number(newTransaction.amount)
        return {...prevState}
      }

    })
    setDate('')
    setAsset('')
    setPrice('')
    setAmount('')
    setNote('')
  }


  return (
    <form
      className="Transaction-Form"
      onSubmit={e => createTransaction(e)}
    >
      <p>SUBMIT A NEW TRANSACTION</p>
      <label>Transaction Date:
        <input
          type="date"
          value={date}
          onChange={e=> setDate(e.target.value)}
        />
      </label><br></br>
      <label> Select an asset:
        <select
          value={asset}
          onChange={e=> setAsset(e.target.value)}>
          {assets.length ?
          <>
            <option value=""> --Select an Asset!--</option>
              {assets.map((asset, i) => (
                <option key={i} value={asset.coin}>{asset.coin}</option>
              ))}
            </>:
            <option>--No Assets Available, Please Add an Asset--</option>}
        </select>
      </label><br></br>
      <label>Price per coin
      <br></br>
        <input
          type="text"
          value={price}
          onChange={e=> setPrice(e.target.value)}
        />
      </label><br></br>
      <label> Amount of coins to transact
        <input
          type="text"
          value={amount}
          onChange={e=> setAmount(e.target.value)}
        />
      </label><br></br>
      <label> Select transaction type
        <select
          value={transactionType}
          onChange={e=> setTransactionType(e.target.value)}
        >
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </select>
      </label><br></br>
      <label> Note
        <input
          type="text"
          value={note}
          onChange={e=> setNote(e.target.value)}
        />
      </label><br></br>
      <input type="submit" value="Track this transaction!" />
    </form>
  )
}

export default TransactionForm;