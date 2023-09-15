import './Expenses.css';
import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
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

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          onFilterChange={handleFilterChange}
          selectedYear={filterYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
