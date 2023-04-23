const getRates = (state, setState) => {
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

export { getRates };
