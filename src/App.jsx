import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-5xl font-extrabold mb-4">Basic <span className='text-green-400'>Expense</span> Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseSummary expenses={expenses} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
};

export default App;
