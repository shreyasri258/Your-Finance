import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
//   const [Title, SetTitle] = useState("");
//   const [Amount, SetAmount] = useState("");
//   const [Date, SetDate] = useState("");
  const [userInput,setUserInput]=useState({
Title:'',
Amount:'',
Date:''
  })

  const titleChangeHandler = (event) => {
    setUserInput({
        ...userInput,
        Title:event.target.value,
    
    });
  };
  const AmountChangeHandler = (event) => {
    setUserInput({
        ...userInput,
        Amount:event.target.value,
    
    });
  };
  const DateChangeHandler = (event) => {
    setUserInput({
        ...userInput,
        Date:event.target.value,
    
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={AmountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
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
