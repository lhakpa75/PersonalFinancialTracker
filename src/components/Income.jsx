import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

function Income() {
  const { income, setIncome } = useContext(FinanceContext);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold">Income</h2>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(Number(e.target.value))}
        className="mt-2 p-2 border rounded w-full"
        placeholder="Enter income amount"
      />
    </div>
  );
}

export default Income;
