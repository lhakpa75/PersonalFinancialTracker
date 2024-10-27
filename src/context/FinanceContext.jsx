// src/context/FinanceContext.jsx
import { createContext, useState } from "react";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [income, setIncome] = useState(null);
  const [expenses, setExpenses] = useState(null);
  const [savingsGoal, setSavingsGoal] = useState(null);

  return (
    <FinanceContext.Provider
      value={{
        income,
        setIncome,
        expenses,
        setExpenses,
        savingsGoal,
        setSavingsGoal,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};
