import React, { useState } from "react";

const Converter = ({ state }) => {
  const [amount, setAmount] = useState(1);

  return (
    <div id="Converter">
      <form>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input type="text" value={state.baseCurrency} readOnly />
        <input type="text" value={state.quoteCurrency} readOnly />
        <input type="number" value={amount * state.pairRate} readOnly />
      </form>
    </div>
  );
};
// todo: Ensure to utilise toFixed(3) to ensure that the number is rounded to 3 decimal places.

export default Converter;
