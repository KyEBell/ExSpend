import './Expenses.css';
import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2021');
  const handleFilterChange = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          onFilterChange={handleFilterChange}
          selectedYear={filterYear}
        />
        {props.expenses.map((element) => (
          <div key={element.id}>
            <ExpenseItem expense={element} />
          </div>
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
