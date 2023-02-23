import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./Expenseslist";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";
import "./Expenseslist.css";

import "./Expenses.css";
import App from "../../App";
import Card from "../UI/Card";
function Expenses(props) {
  const [filter, setFilter] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilter(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filter}
          onFilterChange={filterChangeHandler}
        ></ExpenseFilter>

        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>

        <ExpenseList expenses={filteredExpenses}></ExpenseList>
      </Card>
    </div>
  );
}
export default Expenses;
