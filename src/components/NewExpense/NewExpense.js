import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
  const handleExpenseDataSave = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm savedExpenseData={handleExpenseDataSave} />
    </div>
  );
};

export default NewExpense;
