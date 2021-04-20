import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  return (
    <>
      {expenses.map((expense) => {
        return <ExpenseItem expense={expense} />;
      })}
    </>
  );
};

export default Expenses;
