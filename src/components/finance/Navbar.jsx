import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div id="Navbar">
      <div className="NavBarHeader">
        <h1>Altcademy</h1>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
      </div>
      <nav>
        <Link to={"/finance"}>
          <h2>forex</h2>
        </Link>
        <Link to={"/finance/portfolio"}>
          <h2>Portfolio</h2>
        </Link>
        <Link to={"/finance/crypto"}>
          <h2>Crypto</h2>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
