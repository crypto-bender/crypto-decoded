import React, { useState, useEffect } from "react";
import TradingViewWidget from 'react-tradingview-widget'
import TransactionList from './Components/TransactionList.jsx';
import AssetList from './Components/AssetList.jsx';
import TransactionForm from './Components/TransactionForm.jsx';
import AssetForm from './Components/AssetForm.jsx';
const axios = require('axios');

export default function App() {
  const [ticker, setTickeer] = useState('COINBASE:BTCUSD');
  const [assets, addAssets] = useState([
		{coin: 'bitcoin', ticker: 'btc'},
		{coin: 'ethereum', ticker: 'eth'}
	]);
  const [transactions, addTransactions] = useState([]);
  const [portfolio, setPortfolio] = useState({
		bitcoin: 2,
		ethereum: 10
	});
  const [totalInvested, setTotalInvested] = useState((22940+23200+18000));
	const [priceData, setPriceData] = useState();
	const [currentWorth, setCurrentWorth] = useState();
  console.log('portfolio:',portfolio, 'priceData: ', priceData);


	const fetchCurrentPrices = (assets) => {
		let assetIds = [];
		assets.forEach(asset => assetIds.push(asset.coin))
		const ids = assetIds.join('%2C');
		let vs = Array(assets.length).fill('usd').join('%2C');
		console.log(ids, vs);
		axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${vs}`)
		  .then(response => {
				setPriceData(response.data)
			})
			.catch(err=>console.log('error fetching prices'))
	}

	useEffect(()=> {
		fetchCurrentPrices(assets);
	},[transactions])

	useEffect(()=> {
		let total;
		if(priceData) {
			total = Object.keys(portfolio).reduce((acc, asset) => (acc + portfolio[asset] * priceData[asset].usd),0);
		console.log('total: ', total);
		}
		setCurrentWorth(total);
	}, [priceData])

	let performance;
	if (currentWorth) {
		performance = (100*((currentWorth-totalInvested)/totalInvested)).toFixed(2);
	}

  return (
    <div>
      <h1 className="title">Lets get cryptographic in here!</h1>
      <div className="portfolio-summary">
        <span className="portfolio-history">How wrecked are you?</span>
        <span className="portfolio-value">Current Portfolio Value: ${currentWorth}USD {'('}{performance}%{')'}</span>
        <span className="portfolio-invested">Total Invested: ${totalInvested} USD <br></br>
				{performance > 0 ? 'I am an investing genius!' : 'I will never financially recover from this'}</span>
      </div>
			<br></br>
      <div className="explore-and-add">
        {/* <p>Explore the titans of blockchain</p> */}

        <TradingViewWidget
					className="CenterChart"
					symbol={ticker}
					width={750}
					height={450}
					/>
        <div className="forms">
          {/* <span > */}
            <AssetForm
              className="AssetForm"
              assets={assets}
              addAsset={addAssets}
              />
          {/* </span> */}
          {/* <span > */}
            <TransactionForm
              className="TransactionForm"
              assets={assets}
              transactions={transactions}
              addTransaction={addTransactions}
							portfolio={portfolio}
							setPortfolio={setPortfolio}
							totalInvested={totalInvested}
							setTotalInvested={setTotalInvested}
            />
          {/* </span> */}
        </div>
      </div>
      <div className="list-all">
      {/* this will have two buttons to allow you to list either all assets and amounts or all transactions with details */}
        <div className="sort-by">
          {/* this component will hold all the header information for the list view, with each criteria being clickable to sort by */}
        </div><br></br>
        <AssetList
          portfolio={portfolio}
          setPortfolio={setPortfolio}
          transactions={transactions}
          assets={assets}
        />
        <TransactionList
          portfolio={portfolio}
          adjustPortfolio={setPortfolio}
          transactions={transactions}
          assets={assets}
        />
        {/* <div className="">

        </div> */}
      </div>
    </div>
  );
}
