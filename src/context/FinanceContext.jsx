import { createContext, useState } from "react";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [savingsGoal, setSavingsGoal] = useState(1000); // Example goal

  return (
    <FinanceContext.Provider
      value={{ income, setIncome, expenses, setExpenses, savingsGoal }}
    >
      {children}
    </FinanceContext.Provider>
  );
};
