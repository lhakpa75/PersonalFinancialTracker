import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

function Savings() {
  const { savingsGoal } = useContext(FinanceContext);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold">Savings Goal</h2>
      <p className="mt-2">Goal: ${savingsGoal}</p>
    </div>
  );
}

export default Savings;
