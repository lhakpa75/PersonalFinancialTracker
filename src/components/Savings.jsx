// src/components/Savings.jsx
import React, { useState } from "react";
import useSavings from "../hooks/useSavings";

function Savings() {
  const { savingsGoal, updateSavingsGoal, remainingGoal } = useSavings();
  const [newGoal, setNewGoal] = useState("");

  const handleSaveGoal = () => {
    if (newGoal) {
      updateSavingsGoal(Number(newGoal));
      setNewGoal("");
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold">Savings Goal</h2>
      <input
        type="number"
        value={newGoal}
        onChange={(e) => setNewGoal(e.target.value)}
        placeholder="Enter new savings goal"
        className="mt-2 p-2 border rounded w-full"
      />
      <button
        onClick={handleSaveGoal}
        className="mt-2 p-2 bg-green-500 text-white rounded w-full"
      >
        Save Goal
      </button>
      <p className="mt-4">
        Current Goal:{" "}
        {savingsGoal !== null ? `$${savingsGoal}` : "Goal not set"}
      </p>
      <p>
        Remaining Goal:{" "}
        {remainingGoal !== null ? `$${remainingGoal}` : "No data yet"}
      </p>
    </div>
  );
}

export default React.memo(Savings);
