import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.scss";

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
        <motion.button
          whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
        >
          Finance
        </motion.button>
      </Link>
      <Link to="/project2">
        <motion.button
          whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
        >
          Project 2
        </motion.button>
      </Link>
      <Link to="/project3">
        <motion.button
          whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
        >
          Project 3
        </motion.button>
      </Link>
      <Link to="/project4">
        <motion.button
          whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
        >
          Project 4
        </motion.button>
      </Link>
      <Link to="/project5">
        <motion.button
          whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
        >
          Project 5...
        </motion.button>
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
