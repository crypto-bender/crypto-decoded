import React, { useEffect } from 'react';
// import Table from './Table.jsx';
function AssetListItem({asset, transactions, portfolio, setPortfolio}) {
  // const total = transactions
  //   .filter(transaction => transaction.asset === asset.coin)
  //   .reduce((acc, transaction) => {return acc + Number(transaction.amount)}
  // , 0);

  // useEffect(()=> {
  //   const { coin } = asset;
  //   // let newCoin = {coin: total};
  //   setPortfolio(prevPortfolio => {prevPortfolio[coin] = total; return prevPortfolio})
  // }, [transactions])

  return
    // <div>
    //   {/* <Table coin={asset.coin} amount={total}>
    //     <span>{asset.coin}</span>
    //     <span>{total}</span>
    //   </Table> */}
    // </div>

}

export default AssetListItem;