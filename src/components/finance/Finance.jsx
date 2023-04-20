import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRates } from "./Finance_API";
import ExchangeRates from "./Finance_ExchangeRates";
import "./Finance.scss";

const Finance = (props) => {
  const [state, setState] = useState({
    baseCurrency: "EUR",
    quoteCurrency: "USD",
    exchangeRates: [],
    pairDetails: false,
  });

  useEffect(() => {
    getRates(state, setState);
  }, [state.baseCurrency]);

  return (
    <div id="Finance">
      <ExchangeRates state={state} setState={setState} />
    </div>
  );
};

export default Finance;
