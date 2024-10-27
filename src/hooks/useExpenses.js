// src/hooks/useExpenses.js
import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const useExpenses = () => {
  const { expenses, setExpenses } = useContext(FinanceContext);

  const addExpense = (amount) => {
    setExpenses((prevExpenses) => (prevExpenses || 0) + amount);
  };

  return { expenses, addExpense };
};

export default useExpenses;
