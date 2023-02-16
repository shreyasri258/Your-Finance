import ExpenseItem from "./ExpenseItem"
import "./expenseslist.css"
const expenseList =props=>{

    {props.expenses.length ===0 ? (<p>No Expenses found</p>) : (
        props.expenses.map((expense) => (
          <ExpenseItem
          key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        )))
        }
        return <ul classname="expense-list"></ul>
}
export default expenseList