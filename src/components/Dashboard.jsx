// src/components/Dashboard.jsx
import React from "react";
import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

// Register the elements with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const { income, expenses, savingsGoal } = useContext(FinanceContext);

  const totalIncome = income.reduce((acc, inc) => acc + inc.amount, 0);
  const totalExpenses = expenses.reduce((acc, exp) => acc + exp.amount, 0);

  const data = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        data: [totalIncome, totalExpenses],
        backgroundColor: ["#4caf50", "#f44336"],
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <Pie data={data} />
      <p className="mt-4">Savings Goal: ${savingsGoal}</p>
    </div>
  );
}

export default Dashboard;
