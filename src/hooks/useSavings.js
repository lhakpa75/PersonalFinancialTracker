// src/hooks/useSavings.js
import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const useSavings = () => {
  const { savingsGoal, setSavingsGoal, income, expenses } =
    useContext(FinanceContext);

  const updateSavingsGoal = (newGoal) => setSavingsGoal(newGoal);

  const remainingGoal =
    savingsGoal !== null && income !== null && expenses !== null
      ? savingsGoal - (income - expenses)
      : null;

  return { savingsGoal, remainingGoal, updateSavingsGoal };
};

export default useSavings;
