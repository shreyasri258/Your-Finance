import CalenderItem from './CalenderItem';
import './ExpenseItem.css';
import Card from '../UI/Card';


function ExpenseItem(props) {
    return(
   <Card className='expense-item'>

      <CalenderItem date={props.date}></CalenderItem>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
   </Card>
  );
}

export default ExpenseItem; 
