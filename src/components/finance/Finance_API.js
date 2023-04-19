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

const getHistoricalRates = (state, setState, dateRange) => {
  const host = "api.frankfurter.app";
  fetch(
    `https://${host}/${dateRange}?from=${state.baseCurrency}&to=${state.quoteCurrency}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      setState({
        ...state,
        historicalRates: data.rates,
      });
    });
};

export { getRates, getHistoricalRates };
