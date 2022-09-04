import React from 'react'

import './Coins.css'

const CoinItem = (props) => {
    return (
        <div className='coin-row'>
            <p className='rank'>{props.coins.market_cap_rank}</p>
            <div className='img-symbol'>
                <img src={props.coins.image} alt='' />
                <p>{props.coins.symbol.toUpperCase()}</p>
            </div>
            <p className='price'>${props.coins.current_price.toLocaleString()}</p>
            <p className='price24'>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
            <p className='volume'>${props.coins.total_volume.toLocaleString()}</p>
            <p className='mktCap'>${props.coins.market_cap.toLocaleString()}</p>
        </div>
    )
}

export default CoinItem
