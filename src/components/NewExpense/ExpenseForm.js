// import React, { useState } from "react";
// import "./ExpenseForm.css";
// const ExpenseForm = (props) => {
//   const [Title, SetTitle] = useState("");
//   const [Amount, SetAmount] = useState("");
//   const [NewDate, SetDate] = useState("");
//   //   const [userInput,setUserInput]=useState({
//   // Title:'',
//   // Amount:'',
//   // Date:''
//   //   })

//   const titleChangeHandler = (event) => {
//     SetTitle(event.target.value);
//   };
//   const AmountChangeHandler = (event) => {
//     SetAmount(event.target.value);
//   };
//   const DateChangeHandler = (event) => {
//     SetDate(event.target.value);
//   };
//   const submitHandler = (event) => {
//     const newDay = +NewDate.slice(8) + 1;
 
// const correctDate = NewDate.slice(0, 8) + newDay;
//     event.preventDefault();
//     const expenseData = {
//       title: Title,
//       amount: Amount,
//       date:new Date(correctDate)
//     };
//     //console.log(expenseData);
//     props.onSaveExpenseData(expenseData);
//     SetTitle('');
//     SetAmount('');
//     SetDate('');
//   };
//   return (
//     <form onSubmit={submitHandler}>
//       <div className="new-expense__controls">
//         <div className="new-expense__controls">
//           <label>Title</label>
//           <input type="text" value={Title} onChange={titleChangeHandler}></input>
//         </div>
//         <div className="new-expense__controls">
//           <label>Amount</label>
//           <input 
//             type="number"
//             min="0.01"
//             value={Amount}
//             step="0.01"
//             onChange={AmountChangeHandler}
//           ></input>
//         </div>
//         <div className="new-expense__controls">
//           <label>Date</label>
//           <input
//             type="date"
//             min="2018-01-01"
//             value={Date.toLocaleString()}
//             max="2025-12-31"
//             onChange={DateChangeHandler}
//           ></input>
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;

import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;