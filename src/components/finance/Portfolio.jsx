import { Link } from "react-router-dom";
import Navbar from "./Finance_Navbar";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div id="Portfolio">
      <Navbar />
      <h1>Portfolio</h1>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Portfolio;
