import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./Stocks.scss";

const Stocks = () => {
  return (
    <div id="Stocks">
      <Navbar />
      <h1>Portfolio</h1>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Stocks;
