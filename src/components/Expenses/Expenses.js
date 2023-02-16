
import ExpenseFilter from "./ExpenseFilter";
import expenseList from "./expenseslist";
import { useState } from "react";
import "./expenseslist.css"

import "./Expenses.css";
import App from "../../App";
import Card from "../UI/Card";
function Expenses(props) {
  const [filter, setFilter] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilter(selectedYear);
  };
  const filteredExpenses=props.expenses.filter(expense=>{
    return expense.date.getFullYear().toString()===filter;
  })
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filter}
        onFilterChange={filterChangeHandler}
      ></ExpenseFilter>


      
   
    <expenseList expenses={filteredExpenses}></expenseList>

    </Card>
  );

  
}
export default Expenses;

