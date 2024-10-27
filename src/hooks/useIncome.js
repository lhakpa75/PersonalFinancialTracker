// src/hooks/useIncome.js
import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const useIncome = () => {
  const { income, setIncome } = useContext(FinanceContext);

  const addIncome = (amount) => {
    setIncome((prevIncome) => (prevIncome || 0) + amount);
  };

  return { income, addIncome };
};

export default useIncome;
