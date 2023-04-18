import { useEffect } from "react";
import "./Finance_ExchangeRates.scss";
import BaseCurrency from "./Finance_BaseCurrency";

const ExchangePair = ({ exchangeRates, setExchangeRates, baseCurrency }) => {
  return (
    <tbody>
      {Object.keys(exchangeRates).map((key) => (
        <tr key={key}>
          <td>
            {baseCurrency}/{key}
          </td>
          <td>0.00%</td>
          <td>0.00%</td>
          <td>{exchangeRates[key]}</td>
        </tr>
      ))}
    </tbody>
  );
};

const ExchangeRates = ({ exchangeRates, setExchangeRates, baseCurrency }) => {
  return (
    <div id="ExchangeRates">
      <h2>Exchange Rates</h2>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>24h</th>
            <th>7d</th>
            <th>Rate</th>
          </tr>
        </thead>
        <ExchangePair
          exchangeRates={exchangeRates}
          baseCurrency={baseCurrency}
        />
      </table>
    </div>
  );
};

export default ExchangeRates;

//todo: add a custom component for the table rows
// ?: this will need access to the baseCurrency state from Finance.jsx
