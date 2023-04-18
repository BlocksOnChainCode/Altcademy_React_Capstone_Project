import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div id="Navbar">
      <Link to={"/"}>
        <h2>Home</h2>
      </Link>
      <Link to={"/portfolio"}>
        <h2>Portfolio</h2>
      </Link>
      <Link to={"/crypto"}>
        <h2>Crypto</h2>
      </Link>
    </div>
  );
};

export default Navbar;
