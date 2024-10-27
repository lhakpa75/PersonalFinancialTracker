// src/components/Expenses.jsx
import React, { useState } from "react";
import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

function Expenses() {
  const { addExpense, expenses } = useContext(FinanceContext);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddExpense = () => {
    if (category && amount) {
      addExpense(category, amount);
      setCategory("");
      setAmount("");
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold">Expenses</h2>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Expense Category"
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
        onClick={handleAddExpense}
        className="bg-red-500 text-white rounded w-full p-2 mt-2"
      >
        Add Expense
      </button>
      <ul className="mt-2">
        {expenses.map((exp, index) => (
          <li key={index}>
            {exp.category}: ${exp.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Expenses;
