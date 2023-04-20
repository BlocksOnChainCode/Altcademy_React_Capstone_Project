import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHistoricalRates, getRates } from "./api";
import Forex from "./Finance_Forex";
import "./Finance_Forex.scss";

const Finance = (props) => {
  const [state, setState] = useState({
    baseCurrency: "EUR",
    quoteCurrency: "USD",
    exchangeRates: [],
    pairDetails: false,
  });

  // ! This is the only place where we call the API
  useEffect(() => {
    getRates(state, setState);
    // getHistoricalRates(state, setState, 365);
  }, [state.baseCurrency, state.quoteCurrency]);

  return (
    <div id="Finance">
      <Forex state={state} setState={setState} />
    </div>
  );
};

export default Finance;

/**
 * todo - Place everything to do with API calls in a separate file
 * todo - Add states for historical data in initial call, including rate of 7 days ago and 30 days ago
 */
