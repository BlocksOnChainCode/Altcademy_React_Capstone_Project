import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Finance from "./components/finance/Finance";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/finance" element={<Finance />}></Route>
        <Route path="/?????" element={<div>?????</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
