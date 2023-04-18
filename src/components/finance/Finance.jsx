import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import BaseCurrency from "./Finance_BaseCurrency";
import ExchangeRates from "./Finance_ExchangeRates";

const Finance = () => {
  return (
    <div id="Finance">
      <Navbar />
      <BaseCurrency />
      <ExchangeRates />
    </div>
  );
};

export default Finance;
