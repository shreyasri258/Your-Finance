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
  const filteredExpenses=props.items.filter(expense=>{
    return expense.data.getFullYear().toString()===filter;
  })
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filter}
        onFilterChange={filterChangeHandler}
      ></ExpenseFilter>

      {filteredExpenses.map((expense) => (
        <ExpenseItem
        key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
      
    </Card>
  );
}
export default Expenses;

