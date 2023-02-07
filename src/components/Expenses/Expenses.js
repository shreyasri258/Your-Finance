import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

import "./Expenses.css";
import App from "../../App";
import Card from "../UI/Card";
function Expenses(props) {
  const [filter, setFilter] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilter(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filter}
        onFilterChange={filterChangeHandler}
      ></ExpenseFilter>

      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
      
    </Card>
  );
}
export default Expenses;
