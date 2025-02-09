import { FaTrash } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';

const ExpenseItem = ({ expense, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-2 border rounded my-2">
      <div>
        <h4 className="font-bold">{expense.title}</h4>
        <p className="text-sm">{expense.category}</p>
      </div>
      <div className="flex items-center space-x-4">
        <span><FaDollarSign className='w-5 h-5 inline text-green-400'/>{expense.amount}</span>

        <FaTrash
          onClick={() => onDelete(expense.id)}
          className="text-red-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ExpenseItem;
