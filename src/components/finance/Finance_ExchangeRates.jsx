import { useEffect } from "react";
import "./Finance_ExchangeRates.scss";
import BaseCurrency from "./Finance_BaseCurrency";
import { Link } from "react-router-dom";

const ExchangePair = ({ exchangeRates, setExchangeRates, baseCurrency }) => {
  return (
    <div id="exchangePairs">
      {Object.keys(exchangeRates).map((key) => (
        <Link key={key} to={`/finance/chart`}>
          <div className="pair" key={key}>
            <p>
              {baseCurrency}/{key} 00% 00% {exchangeRates[key]}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

const ExchangeRates = ({ exchangeRates, setExchangeRates, baseCurrency }) => {
  return (
    <div id="ExchangeRates">
      <h2>Exchange Rates</h2>

      <ExchangePair exchangeRates={exchangeRates} baseCurrency={baseCurrency} />
    </div>
  );
};

export default ExchangeRates;

//todo: add a custom component for the table rows
// ?: this will need access to the baseCurrency state from Finance.jsx
