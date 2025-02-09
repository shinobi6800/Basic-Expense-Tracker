const ExpenseSummary = ({ expenses }) => {
    const total = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
  
    return (
      <div className="p-4 bg-green-400 rounded m-2 text-white">
        <h2 className="text-xl font-bold">Total Expenses: ${total}</h2>
      </div>
    );
  };
  
  export default ExpenseSummary;
  