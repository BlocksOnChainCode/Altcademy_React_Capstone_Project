import React, { useState, useEffect } from "react";
import "./Forex_Converter.scss";
import { getRates } from "./api";

const Converter = (props) => {
  const { state, setState } = props;
  const [amount, setAmount] = useState(10);

  const handleChange = (e) => {
    e.preventDefault();
    const { baseCurrency, quoteCurrency } = state;
    setState({
      ...state,
      baseCurrency: quoteCurrency,
      quoteCurrency: baseCurrency,
      pairRate: 1 / state.pairRate,
    });
    getRates(state, setState);
  };

  useEffect(() => {
    getRates(state, setState);
  }, [state.baseCurrency, state.quoteCurrency]);

  const conversionResult = (amount * state.pairRate).toFixed(3);

  return (
    <div id="Converter">
      <form>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleChange}>Swap</button>
        <input
          id="conversionResult"
          type="number"
          value={conversionResult}
          readOnly
        />
      </form>
    </div>
  );
};

export default Converter;
