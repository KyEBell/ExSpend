import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
const Expenses = ({ expenses }) => {
  return (
    <Card className='expenses'>
      {expenses.map((element) => (
        <div key={element.id}>
          <ExpenseItem expense={element} />
        </div>
      ))}
    </Card>
  );
}

export default Expenses;
