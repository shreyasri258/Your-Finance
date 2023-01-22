import './ExpenseItem.css';
function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>March 16 2023 </div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <div className='expense-item__price'>$560.54</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
