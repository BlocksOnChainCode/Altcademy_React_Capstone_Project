import Navbar from "../Navbar";
import { useEffect, useState } from "react";
import { getCoins } from "./api.js";
import { motion } from "framer-motion";
import "./Crypto.scss";

const Crypto = () => {
  const [coins, setCoins] = useState([]);
  const [coinDetails, setCoinDetails] = useState(false);

  const handleExpand = () => setCoinDetails(!coinDetails);

  useEffect(() => {
    getCoins().then((data) => setCoins(data));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      id="Crypto"
    >
      <Navbar />
      {coins.map((coin) => (
        <div key={coin.id} className="coin" onClick={handleExpand}>
          <div className="coin-left">
            <img src={coin.image} alt={coin.name} />
            <h2>{coin.name}</h2>
            <h2 className="coin-price">$ {coin.current_price.toFixed(2)}</h2>
          </div>

          {coinDetails && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="coin-details"
            >
              <div className="coin-price">
                <p>Market Cap Rank: {coin.market_cap_rank}</p>
                <p>Symbol: {coin.symbol}</p>
              </div>
              <div className="coin-price">
                <p>High 24h: ${coin.high_24h}</p>
                <p>Low 24h: ${coin.low_24h}</p>
              </div>
              <div className="coin-price">
                <p>Price Change 24h: </p>
                <p>{coin.price_change_24h.toFixed(2)}$</p>
                <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default Crypto;
