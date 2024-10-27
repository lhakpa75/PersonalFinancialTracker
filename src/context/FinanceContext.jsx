// src/context/FinanceContext.jsx
import { createContext, useState } from "react";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [savingsGoal, setSavingsGoal] = useState(1000);

  const addIncome = (source, amount) => {
    setIncome((prev) => [...prev, { source, amount: Number(amount) }]);
  };

  const addExpense = (category, amount) => {
    setExpenses((prev) => [...prev, { category, amount: Number(amount) }]);
  };

  return (
    <FinanceContext.Provider
      value={{
        income,
        expenses,
        savingsGoal,
        setSavingsGoal,
        addIncome,
        addExpense,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};
