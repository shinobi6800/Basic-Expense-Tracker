import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
