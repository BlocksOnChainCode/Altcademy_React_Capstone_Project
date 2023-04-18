import "./Finance_ExchangeRates.scss";

const ExchangeRates = () => {
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
        <tbody>
          {/* Here needs to be mapped a custom component containing the table rows */}
        </tbody>
      </table>
    </div>
  );
};

export default ExchangeRates;

//todo: add a custom component for the table rows
// ?: this will need access to the baseCurrency state from Finance.jsx
