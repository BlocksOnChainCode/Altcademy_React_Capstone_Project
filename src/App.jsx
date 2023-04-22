import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Forex from "./components/forex/Forex";
import Stocks from "./components/stocks/Stocks";
import Crypto from "./components/crypto/Crypto";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/forex" element={<Forex />}></Route>
        <Route path="/stocks" element={<Stocks />}></Route>
        <Route path="/crypto" element={<Crypto />}></Route>
      </Routes>
    </div>
  );
}

export default App;
