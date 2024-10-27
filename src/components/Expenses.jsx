// src/components/Expenses.jsx
import React, { useState } from "react";
import useExpenses from "../hooks/useExpenses";

function Expenses() {
  const { expenses, addExpense } = useExpenses();
  const [amount, setAmount] = useState("");

  const handleAddExpense = () => {
    if (amount) {
      addExpense(Number(amount));
      setAmount("");
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold">Expenses</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter expense amount"
        className="mt-2 p-2 border rounded w-full"
      />
      <button
        onClick={handleAddExpense}
        className="mt-2 p-2 bg-red-500 text-white rounded w-full"
      >
        Add Expense
      </button>
      <p className="mt-2">
        Total Expenses:{" "}
        {expenses !== null ? `$${expenses}` : "No expenses recorded yet"}
      </p>
    </div>
  );
}

export default React.memo(Expenses);
