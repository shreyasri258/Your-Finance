import ExpenseItem from "./ExpenseItem";
import "./Expenseslist.css";
const ExpenseList = (props) => {
 
  if (props.expenses.length === 0)
    return <h2 className="expenses-list__fallback">Found No expenses.</h2>;
  return (
    <ul classname="expense-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};
export default ExpenseList;
