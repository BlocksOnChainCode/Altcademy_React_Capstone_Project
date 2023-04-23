const apiKey = "S765H6N4CCK2VPCH";

const getStocks = async (stock) => {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stock}&apikey=${apiKey}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export { getStocks };
