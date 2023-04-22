const getCoins = () => {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

export { getCoins };
