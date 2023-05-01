import { useState, useEffect } from "react";
import "./Forex.scss";
import Pairs from "./Forex_Pairs";
import Details from "./Forex_Details";
import { getRates } from "./api";

const Forex = () => {
  const [state, setState] = useState({
    baseCurrency: "EUR",
    quoteCurrency: "USD",
    pairRate: [],
    exchangeRates: [],
    pairDetails: false,
  });

  useEffect(() => {
    getRates(state, setState);
  }, [state.baseCurrency, state.quoteCurrency]);

  const conditionalRender = state.pairDetails ? (
    <Details state={state} setState={setState} />
  ) : (
    <Pairs state={state} setState={setState} />
  );

  return <div id="ExchangeRates">{conditionalRender}</div>;
};

export default Forex;
