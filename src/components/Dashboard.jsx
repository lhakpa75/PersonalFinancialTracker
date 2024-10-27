import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

function Dashboard() {
  const { income, expenses, savingsGoal } = useContext(FinanceContext);
  const remaining = savingsGoal - (income - expenses);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <p>Income: ${income}</p>
      <p>Expenses: ${expenses}</p>
      <p>Remaining Savings Goal: ${remaining}</p>
    </div>
  );
}

export default Dashboard;
