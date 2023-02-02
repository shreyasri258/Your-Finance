import CalenderItem from './CalenderItem';
import React,{useState} from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';


function ExpenseItem(props) {

  const [title,setTitle]=useState(props.title);

 // let title=props.title;
  const clickHandler = ()=>{
   setTitle('Updated')
    console.log(title);
  }
    return(
   <Card className='expense-item'>

      <CalenderItem date={props.date}></CalenderItem>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
   </Card> 
  );
}

export  default ExpenseItem; 
