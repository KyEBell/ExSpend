import './Expenses.css';
import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('Show All');
  const handleFilterChange = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((element) => {
    if (filterYear !== 'Show All') {
      return element.date.getFullYear().toString() === filterYear;
    } else return true;
  });
  let expensesContent = <p>No Expenses Found</p>;
  if (filteredExpenses.length > 0) {
    expensesContent =
      filteredExpenses.length > 0 &&
      filteredExpenses.map((element) => (
        <ExpenseItem key={element.id} expense={element} />
      ));
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          onFilterChange={handleFilterChange}
          selectedYear={filterYear}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
