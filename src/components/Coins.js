import React from "react";
import CoinItem from "./CoinItem";
import Coin from "../routes/Coin";
import { Link } from "react-router-dom";

import "./Coins.css";

const Coins = (props) => {
  return (
    <div className="container">
      <div className="wrap">
        <div className="wrap2">
          <div className="heading">
            <p className="part1">#</p>
            <p className="part2">Coin</p>
            <p className="part3">Price</p>
            <p className="part4">24h</p>
            <p className="part5">Volume</p>
            <p className="part6">Mkt Cap</p>
          </div>

          {props.coins.map((coins) => {
            return (
              <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                <CoinItem coins={coins} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Coins;
