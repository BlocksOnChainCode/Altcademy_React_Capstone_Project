import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.scss";

const homeVariants = {
  hidden: {
    opacity: 0,
    x: -400,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 100,
      delay: 0.5,
    },
  },
};

const Home_Header = () => {
  return (
    <motion.div
      id="Home_Header"
      initial={{ opacity: 0, x: 800 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 50 }}
    >
      <h1>Altcademy</h1>
      <h2>React Capstone Project</h2>
    </motion.div>
  );
};

const Home_Projects = () => {
  return (
    <motion.div
      id="Home_Projects"
      initial={{ opacity: 0, x: 800 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 50 }}
    >
      <Link to="/finance">
        <button>Finance</button>
      </Link>
      <Link to="/?????">
        <button>Project 2</button>
      </Link>
      <Link to="/?????">
        <button>Project 3</button>
      </Link>
      <Link to="/?????">
        <button>Project 4</button>
      </Link>
      <Link to="/?????">
        <button>Project 5...</button>
      </Link>
    </motion.div>
  );
};

const Home = () => {
  return (
    <div id="Home">
      <Home_Header />
      <Home_Projects />
    </div>
  );
};

export default Home;
