import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Finance from "./components/finance/Finance";
import Portfolio from "./components/finance/Portfolio";
import Crypto from "./components/finance/Crypto";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/finance" element={<Finance />}></Route>
        <Route path="/finance/portfolio" element={<Portfolio />}></Route>
        <Route path="/finance/crypto" element={<Crypto />}></Route>
      </Routes>
    </div>
  );
}

export default App;
