import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Forex.scss";
import Navbar from "../Navbar";
import BaseCurrency from "./Forex_BaseCurrency";
import Pairs from "./Forex_Pairs";
import LineChart from "./Forex_LineChart";
import { getRates, getHistoricalRates } from "./api";

const Forex = () => {
  const [state, setState] = useState({
    baseCurrency: "EUR",
    quoteCurrency: "USD",
    exchangeRates: [],
    pairDetails: false,
  });

  useEffect(() => {
    getRates(state, setState);
  }, [state.baseCurrency, state.quoteCurrency]);

  let conditionalRender = null;
  if (state.pairDetails) {
    conditionalRender = <LineChart state={state} setState={setState} />;
  } else {
    conditionalRender = <Pairs state={state} setState={setState} />;
  }

  return <div id="ExchangeRates">{conditionalRender}</div>;
};

export default Forex;
