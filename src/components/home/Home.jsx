import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.scss";

const Home = () => {
  return (
    <div id="Home">
      <div id="Home_header">
        <h1>Altcademy</h1>
        <h2>React Capstone Project</h2>
      </div>
      <Link to="/finance">
        <button>Finance</button>
      </Link>
      <Link to="/?????">
        <button>?????</button>
      </Link>
      <Link to="/?????">
        <button>?????</button>
      </Link>
      <Link to="/?????">
        <button>?????</button>
      </Link>
      <Link to="/?????">
        <button>?????</button>
      </Link>
    </div>
  );
};

export default Home;
