"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const Donough = ({ ...graphConfig }: any) => {
  return <Doughnut {...graphConfig} />;
};

export default Donough;
