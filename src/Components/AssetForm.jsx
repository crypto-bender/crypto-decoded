import React, {useState} from 'react';

function AssetForm({assets, addAsset}) {
  const [coin, setCoin] = useState('');
  const [exchange, setExchange] = useState('');
  const [ticker, setTicker] = useState('');
  const [address, setAddress] = useState('');

  const createAssetType = (event) => {
    event.preventDefault();
    let newAsset = {
      coin: coin,
      exchange: exchange,
      ticker: ticker,
      address: address
    }
    // if (assets?.length) {
      addAsset(prevAssets => {
        return [...prevAssets].concat(newAsset);
      })
    // }
  }

  return (
    <form
      className="Asset-Form"
      onSubmit={(e)=> createAssetType(e)}
    >
      <p>TRACK A NEW ASSET</p>
      <label>
        Coin:
        <br></br>
        <input
          type="text"
          value={coin}
          onChange={(e)=> setCoin(e.target.value)}
          required
        />
      </label>
      <br></br>
      {/* <label>
        exchange:
        <input
          type="text"
          value={chain}
          onChange={(e)=> setChain(e.target.value)}
          required
        />
      </label>
      <br></br> */}
      <label>
        Ticker Sign:
        <br></br>
        <input
          type="text"
          value={ticker}
          onChange={(e)=> setTicker(e.target.value)}
          required maxLength={5}
        />
      </label>
      <br></br>
      <label>
        If held on exchange, which one? {"(Optional)"}:
        <br></br>
        <input
          type="text"
          value={exchange}
          onChange={(e)=> setExchange(e.target.value)}
        />
      </label>
      <br></br>
      <label>
        Add wallet address for future tracking {"(Optional)"}:
        <br></br>
        <input
          type="text"
          value={address}
          onChange={(e)=> setAddress(e.target.value)}
        />
      </label>
      <br></br>
      <input type="submit" value="Begin Tracking!"/>
    </form>
  )
}

export default AssetForm;