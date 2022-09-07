import React, { useEffect } from 'react';
import AssetListItem from './AssetListItem.jsx';
import RsuiteTable from './RsuiteTable.jsx';

function AssetList({assets, transactions, portfolio,  setPortfolio}) {
  //set a state that decides if list is filtered by asset or transaction const []
  // const total = transactions
  //   .filter(transaction => transaction.asset === asset.coin)
  //   .reduce((acc, transaction) => {return acc + Number(transaction.amount)}
  // , 0);

  useEffect(()=> {
    // const { coin } = asset;
    // // let newCoin = {coin: total};
    // setPortfolio(prevPortfolio => {prevPortfolio[coin] = total; return prevPortfolio})
  }, [transactions])

  return (
    <div>
      {assets.map((asset, i) =>
      <AssetListItem
      key={i}
      asset={asset}
      transactions={transactions}
      portfolio={portfolio}
      setPortfolio={setPortfolio}
      />
      )}
      <RsuiteTable
        assets={assets}
        portfolio={portfolio}
        transactions={transactions} ></RsuiteTable>
    </div>
  )
}

export default AssetList;