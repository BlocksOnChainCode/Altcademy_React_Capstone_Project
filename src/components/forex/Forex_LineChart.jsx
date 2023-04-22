import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import "./Forex_LineChart.scss";

const LineChart = (props) => {
  const { state, setState } = props;

  return (
    <div>
      <Navbar />
      <h1>Line Chart</h1>
    </div>
  );
};

export default LineChart;
