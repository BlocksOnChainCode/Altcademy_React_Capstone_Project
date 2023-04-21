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
  }, [state.baseCurrency, state.quoteCurrency]);

  return (
    <div id="Finance">
      <Forex state={state} setState={setState} />
    </div>
  );
};

export default Finance;

/**
 * Place everything to do with API calls in a separate file (DONE)
 * todo - Add states for historical data in initial call, including rate of 7 days ago and 30 days ago
 */
