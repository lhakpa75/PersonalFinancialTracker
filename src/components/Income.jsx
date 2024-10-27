// src/components/Income.jsx
import React, { useState } from "react";
import useIncome from "../hooks/useIncome";

function Income() {
  const { income, addIncome } = useIncome();
  const [amount, setAmount] = useState("");

  const handleAddIncome = () => {
    if (amount) {
      addIncome(Number(amount));
      setAmount("");
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold">Income</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter income amount"
        className="mt-2 p-2 border rounded w-full"
      />
      <button
        onClick={handleAddIncome}
        className="mt-2 p-2 bg-blue-500 text-white rounded w-full"
      >
        Add Income
      </button>
      <p className="mt-2">
        Total Income:{" "}
        {income !== null ? `$${income}` : "No income recorded yet"}
      </p>
    </div>
  );
}

export default React.memo(Income);
