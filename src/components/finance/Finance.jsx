import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import BaseCurrency from "./Finance_BaseCurrency";

const Finance = () => {
  return (
    <div id="Finance">
      <Navbar />
      <BaseCurrency />
    </div>
  );
};

export default Finance;
