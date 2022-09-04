import React from "react";
import "./TopCrypto.css";

const TopCrypto = () => {
  return (
    <div className="topCrypto">
      <h1 className="head">Best Coin of the Month</h1>
      <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png" alt="logo" className="btcImg font" />
      <br />
      <small className="font">Bitcoin</small>
      <p className="font">$69k all time High</p>
      <p className="font">21M Max Supply</p>
    </div>
  );
};

export default TopCrypto;
