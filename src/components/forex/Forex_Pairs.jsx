import { motion } from "framer-motion";
import Navbar from "../Navbar";
import BaseCurrency from "./Forex_BaseCurrency";
import { useState } from "react";
import "./Forex_Pairs.scss";

const Pairs = (props) => {
  const { state, setState } = props;

  const handleQuoteCurrencyChange = (key) => {
    setState({
      ...state,
      quoteCurrency: key,
      pairDetails: true,
      pairRate: state.exchangeRates[key],
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

export default Pairs;

// todo: refactor SCSS ID's and classes to be more specific.
