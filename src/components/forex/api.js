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

const getHistoricalRates = (state, setState, timeframe) => {
  const today = new Date(); // Get today's date
  let fromDate = new Date(today); // Create a new Date object for today's date

  // Set fromDate based on the timeframe parameter
  switch (timeframe) {
    case 7:
      fromDate.setDate(today.getDate() - 6);
      break;
    case 30:
      fromDate.setDate(today.getDate() - 29);
      break;
    case 365:
      fromDate.setFullYear(today.getFullYear() - 1);
      break;
    default:
      console.log("Invalid timeframe");
      return;
  }

  // Format the dates in the required format: YYYY-MM-DD
  const todayFormatted = today.toISOString().split("T")[0];
  const fromDateFormatted = fromDate.toISOString().split("T")[0];
  const dateRange = `${fromDateFormatted}..${todayFormatted}`;

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
