import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
const Expenses = (props) => {
  return (
    <Card className='expenses'>
      {props.expenses.map((element) => (
        <div key={element.id}>
          <ExpenseItem expense={element} />
        </div>
      ))}
    </Card>
  );
};

export default Expenses;
