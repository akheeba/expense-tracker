import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [income, expense],
        backgroundColor: ["#16a34a", "#dc2626"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h3>📊 Income vs Expense</h3>

      <div style={{ width: "320px", margin: "20px auto" }}>
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default ExpenseChart;