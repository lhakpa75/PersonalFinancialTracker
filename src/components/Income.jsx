// src/components/Income.jsx
import React, { useState } from "react";
import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

function Income() {
  const { addIncome, income } = useContext(FinanceContext);
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddIncome = () => {
    if (source && amount) {
      addIncome(source, amount);
      setSource("");
      setAmount("");
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold">Income</h2>
      <input
        type="text"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        placeholder="Income Source"
        className="p-2 border rounded w-full mt-2"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="p-2 border rounded w-full mt-2"
      />
      <button
        onClick={handleAddIncome}
        className="bg-blue-500 text-white rounded w-full p-2 mt-2"
      >
        Add Income
      </button>
      <ul className="mt-2">
        {income.map((inc, index) => (
          <li key={index}>
            {inc.source}: ${inc.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Income;
