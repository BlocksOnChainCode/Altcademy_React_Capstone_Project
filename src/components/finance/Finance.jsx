import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import BaseCurrency from "./Finance_BaseCurrency";
import ExchangeRates from "./Finance_ExchangeRates";

const Finance = (props) => {
  const { state, setState } = props;

  // const [baseCurrency, setBaseCurrency] = useState("EUR");
  // const [quoteCurrency, setQuoteCurrency] = useState("USD");
  // const [exchangeRates, setExchangeRates] = useState([]);

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
    fetch(`https://${host}/latest?from=${state.baseCurrency}`)
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          ...state,
          exchangeRates: data.rates,
        });
      });
  };

  useEffect(() => {
    getRates();
  }, [state.baseCurrency]);

  /*   useEffect(() => {
    console.log(state.exchangeRates);
  }, [state.exchangeRates]);

  useEffect(() => {
    console.log(state.quoteCurrency);
  }, [state.quoteCurrency]); */

  return (
    <div id="Finance">
      <Navbar />
      <BaseCurrency state={state} setState={setState} />
      <ExchangeRates state={state} setState={setState} />
      <button onClick={getCurrencies}>log rates</button>
      <button onClick={getRates}>log currencies</button>
    </div>
  );
};

export default Finance;
