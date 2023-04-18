import { useState, useEffect } from "react";
import "./Finance_ExchangeRates.scss";
import { Link } from "react-router-dom";

const ExchangePair = (props) => {
  const { state, setState } = props;

  const handleQuoteCurrencyChange = (key) => {
    setState({
      ...state,
      quoteCurrency: key,
    });
  };

  return (
    <div id="exchangePairs">
      {Object.keys(state.exchangeRates).map((key) => (
        <Link key={key} to={`/finance/chart`}>
          <div
            className="pair"
            key={key}
            onClick={() => handleQuoteCurrencyChange(key)}
          >
            <p>
              {state.baseCurrency}/<span>{key}</span> {state.exchangeRates[key]}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

const ExchangeRates = (props) => {
  const { state, setState } = props;
  return (
    <div id="ExchangeRates">
      <h2>Exchange Rates</h2>

      <ExchangePair state={state} setState={setState} />
    </div>
  );
};

export default ExchangeRates;

//todo: add a custom component for the table rows
// ?: this will need access to the baseCurrency state from Finance.jsx
