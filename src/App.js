import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Paper Towels',
    amount: 16.89,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 185.62,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Mousepad',
    amount: 200.0,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);
  const handleNewExpense = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  return (
    <div>
      <NewExpense addExpense={handleNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
