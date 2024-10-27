import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

function Expenses() {
  const { expenses, setExpenses } = useContext(FinanceContext);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold">Expenses</h2>
      <input
        type="number"
        value={expenses}
        onChange={(e) => setExpenses(Number(e.target.value))}
        className="mt-2 p-2 border rounded w-full"
        placeholder="Enter expenses amount"
      />
    </div>
  );
}

export default Expenses;
