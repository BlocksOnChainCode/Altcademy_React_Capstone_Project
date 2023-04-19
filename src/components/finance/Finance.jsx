import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRates } from "./Finance_API";
import Navbar from "./Navbar";
import BaseCurrency from "./Finance_BaseCurrency";
import ExchangeRates from "./Finance_ExchangeRates";

const Finance = (props) => {
  const { state, setState } = props;

  // const [baseCurrency, setBaseCurrency] = useState("EUR");
  // const [quoteCurrency, setQuoteCurrency] = useState("USD");
  // const [exchangeRates, setExchangeRates] = useState([]);

  useEffect(() => {
    getRates(state, setState);
  }, [state.baseCurrency]);

  return (
    <div id="Finance">
      <Navbar />
      <BaseCurrency state={state} setState={setState} />
      <ExchangeRates state={state} setState={setState} />

      <button onClick={getRates}>log rates</button>
    </div>
  );
};

export default Finance;
