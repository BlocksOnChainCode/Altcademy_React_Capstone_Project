import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -400 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 50 }}
      id="Navbar"
    >
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
    </motion.div>
  );
};

export default Navbar;
