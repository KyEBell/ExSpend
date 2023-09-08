import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //handling the state of the title changes.
  const handleTitleChange = (e) => {
    setEnteredTitle(e.target.value);
  };
  //Handling the state of the amount change.
  const handleAmountChange = (e) => {
    setEnteredAmount(e.target.value);
  };
  //Handling the state of the date change
  const handleDateChange = (e) => {
    setEnteredDate(e.target.value);
  };
  //code for handling the submission of the Expense Form.
  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.savedExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={handleAmountChange}
            value={enteredAmount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2021-01-01'
            max='2023-12-31'
            onChange={handleDateChange}
            value={enteredDate}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense!</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
