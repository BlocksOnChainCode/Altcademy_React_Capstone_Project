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
          <button>forex</button>
        </Link>
        <Link to={"/finance/portfolio"}>
          <button>Portfolio</button>
        </Link>
        <Link to={"/finance/crypto"}>
          <button>Crypto</button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
