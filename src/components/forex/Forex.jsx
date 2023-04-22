import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Forex.scss";
import Navbar from "../Navbar";
import BaseCurrency from "./Forex_BaseCurrency";
import { getRates, getHistoricalRates } from "./api";

const LineChart = (props) => {
  const { state, setState } = props;

  handleBack = () => {
    setState({
      ...state,
      pairDetails: false,
    });
  };

  return (
    <div>
      <h1>Line Chart</h1>

      <button onClick={handleBack}>Back</button>
    </div>
  );
};

const ExchangePair = (props) => {
  const { state, setState } = props;

  const handleQuoteCurrencyChange = (key) => {
    setState({
      ...state,
      quoteCurrency: key,
      pairDetails: true,
    });
  };

  return (
    <div>
      <Navbar />
      <BaseCurrency state={state} setState={setState} />
      <motion.div
        initial={{ opacity: 0, x: -800 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
        id="exchangePairs"
      >
        {Object.keys(state.exchangeRates).map((key) => (
          <div
            className="pair"
            key={key}
            onClick={() => handleQuoteCurrencyChange(key)}
          >
            <h3>
              {state.baseCurrency} / {key}
            </h3>
            <h3>{state.exchangeRates[key]}</h3>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

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
    conditionalRender = <ExchangePair state={state} setState={setState} />;
  }

  return <div id="ExchangeRates">{conditionalRender}</div>;
};

export default Forex;
