import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [Title, SetTitle] = useState("");
  const [Amount, SetAmount] = useState("");
  const [Date, SetDate] = useState("");
  //   const [userInput,setUserInput]=useState({
  // Title:'',
  // Amount:'',
  // Date:''
  //   })

  const titleChangeHandler = (event) => {
    SetTitle(event.target.value);
  };
  const AmountChangeHandler = (event) => {
    SetAmount(event.target.value);
  };
  const DateChangeHandler = (event) => {
    SetDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: Title,
      amount: Amount,
      date: Date,
    };
    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    SetTitle('');
    SetAmount('');
    SetDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value={Title} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input 
            type="number"
            min="0.01"
            value={Amount}
            step="0.01"
            onChange={AmountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            value={Date}
            max="2025-12-31"
            onChange={DateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
