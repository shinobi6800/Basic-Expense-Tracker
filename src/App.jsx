import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import {inertia, motion} from "framer-motion"
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
       <motion.div 
       initial={{scale:0.9,opacity:0.3,x:-10}}
       animate={{
           scale:1,
           opacity:1,
           x:0
       }}
       >
      <h1 className="text-5xl font-extrabold mb-4">Basic <span className='text-green-400'>Expense</span> Tracker</h1>
      </motion.div>
      <ExpenseForm onAddExpense={addExpense} />
      <motion.div     animate={{
      scale: [1, 0.3, 1.1, 1, 1],
      rotate: [0, 0, -1, 1, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}>
      <ExpenseSummary expenses={expenses} />
      </motion.div>
      <motion.div  
      whileHover={{ scale: 1.05 }}
      transition={{duration:0.4}}
        >
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
      </motion.div>
    </div>
  );
};

export default App;
