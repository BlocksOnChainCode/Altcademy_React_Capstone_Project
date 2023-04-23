import Navbar from "../Navbar";
import { useEffect, useState } from "react";
import { getCoins } from "./api.js";
import "./Crypto.scss";

const Crypto = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getCoins().then((data) => setCoins(data));
  }, []);

  console.log(coins);

  return (
    <div id="Crypto">
      <Navbar />
      <h1>Crypto</h1>
      {/* Map out the coins state */}
      {coins.map((coin) => (
        <div key={coin.id} className="coin">
          <div className="coin-left">
            <p className="rank">{coin.market_cap_rank}</p>
            <img src={coin.image} alt={coin.name} />
            <h2>{coin.name}</h2>
            <p>$ {coin.current_price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Crypto;
