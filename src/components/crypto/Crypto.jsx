import Navbar from "../Navbar";
import { useEffect, useState } from "react";
import { getCoins } from "./api.js";
import { motion } from "framer-motion";
import "./Crypto.scss";

const Expand = (props) => {
  const { coin } = props;
  return (
    <div className="coin-details">
      <h2>{coin.name}</h2>
      <h2 className="coin-price">$ {coin.current_price.toFixed(2)}</h2>
      <h2 className="coin-volume">$ {coin.total_volume.toLocaleString()}</h2>
      <h2 className="coin-marketcap">$ {coin.market_cap.toLocaleString()}</h2>
      <h2 className="coin-percent">
        {coin.price_change_percentage_24h.toFixed(2)}%
      </h2>
    </div>
  );
};

const Crypto = () => {
  const [coins, setCoins] = useState([]);
  const [coinDetails, setCoinDetails] = useState(false);
  const handleExpand = () => setCoinDetails(!coinDetails);

  useEffect(() => {
    getCoins().then((data) => setCoins(data));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 800 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 50 }}
      id="Crypto"
    >
      <Navbar />
      <button onClick={handleExpand}>Expand</button>
      {coins.map((coin) => (
        <motion.div
          whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
          whileTap={{ scale: 0.9 }}
          className="coin"
          key={coin.id}
        >
          <div className="coin-left">
            <img src={coin.image} alt={coin.name} />
            <h2>{coin.name}</h2>
            <h2 className="coin-price">$ {coin.current_price.toFixed(2)}</h2>
          </div>

          {coinDetails && <Expand coin={coin} />}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Crypto;
