import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Finance = () => {
  return (
    <div id="Finance">
      <Navbar />
      <h1>Finance</h1>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Finance;
