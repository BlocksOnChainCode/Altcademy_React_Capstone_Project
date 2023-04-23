import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { getStocks } from "./api.js";
import { useState } from "react";
import "./Stocks.scss";

// todo - add chart for stock response

// Search bar for stock symbol search calling the API
const Stocks = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    getStocks(search);
  };

  return (
    <div id="Stocks">
      <Navbar />
      <h1>Stocks</h1>
      <div className="search">
        <input
          value={search}
          onChange={handleChange}
          type="text"
          placeholder="Search for a stock"
        />
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
};

export default Stocks;
