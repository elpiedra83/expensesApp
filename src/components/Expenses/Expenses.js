import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [filteredYEar, setFilteredYear] = useState("2021");

  const yearChanged = (year) => {
    console.log(year);
    setFilteredYear(year);
  };

  return (
    <>
      <ExpensesFilter selected={filteredYEar} onYearChange={yearChanged} />
      {expenses.map((expense) => {
        return <ExpenseItem key={expense.id} expense={expense} />;
      })}
    </>
  );
};

export default Expenses;
