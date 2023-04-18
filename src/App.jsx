import { useState } from "react";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return <div>Home</div>;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/finance" element={<div>Finance</div>}></Route>
        <Route path="/?????" element={<div>?????</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
