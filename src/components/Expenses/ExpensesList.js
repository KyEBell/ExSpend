import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

  if (props.expenses.length < 1) {
    return <h2 className='expenses-list__fallback'>No Expenses Found</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.expenses.map((element) => (
        <ExpenseItem key={element.id} expense={element} />
      ))}
    </ul>
  );
};

export default ExpensesList;
