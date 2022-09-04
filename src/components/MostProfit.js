import React from "react";
import "./MostProfit.css";
const MostProfit = (props) => {
  console.log(props.coins.id);
  return (
    <div className="mostProfit">
      <h1 className="head">Most Popular</h1>
      <img src="https://assets.coingecko.com/coins/images/279/large/ethereum.png" alt="logo" className="btcImg font" />
      <br />
      <small className="font">Ethereum</small>
      <p className="font">$48k all time High</p>
      <p className="font">Infinite Max Supply</p>
    </div>
  );
};

export default MostProfit;
