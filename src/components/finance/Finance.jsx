import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import BaseCurrency from "./Finance_BaseCurrency";
import ExchangeRates from "./Finance_ExchangeRates";

const Finance = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [exchangeRates, setExchangeRates] = useState([]);

  const getCurrencies = () => {
    const host = "api.frankfurter.app";
    fetch(`https://${host}/currencies`)
      .then((resp) => resp.json())
      .then((data) => {
        console.table(data);
      });
  };

  const getRates = () => {
    const host = "api.frankfurter.app";
    fetch(`https://${host}/latest?from=${baseCurrency}`)
      .then((resp) => resp.json())
      .then((data) => {
        setExchangeRates(data.rates);
        console.log(data);
      });
  };

  useEffect(() => {
    getRates();
  }, [baseCurrency]);

  useEffect(() => {
    console.log(exchangeRates);
  }, [exchangeRates]);

  return (
    <div id="Finance">
      <Navbar />
      <BaseCurrency
        baseCurrency={baseCurrency}
        setBaseCurrency={setBaseCurrency}
      />
      <ExchangeRates
        exchangeRates={exchangeRates}
        setExchangeRates={setExchangeRates}
        baseCurrency={baseCurrency}
      />
      <button onClick={getCurrencies}>log rates</button>
      <button onClick={getRates}>log currencies</button>
    </div>
  );
};

export default Finance;
