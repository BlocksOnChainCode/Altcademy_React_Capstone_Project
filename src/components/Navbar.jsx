import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, type: "spring", stiffness: 50 }}
      id="Navbar"
    >
      <div className="Header">
        <h1>Altcademy</h1>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
