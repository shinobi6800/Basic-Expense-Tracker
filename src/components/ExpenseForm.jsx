import { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: 'Food',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.amount) return;
    onAddExpense({ ...formData, id: Date.now() });
    setFormData({ title: '', amount: '', category: 'Food' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        placeholder="Expense Title"
        value={formData.title}
        onChange={handleChange}
        className="p-2 border rounded w-full"
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        className="p-2 border rounded w-full"
      />
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="p-2 border rounded w-full"
      >
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Bills">Bills</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded m-4">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
