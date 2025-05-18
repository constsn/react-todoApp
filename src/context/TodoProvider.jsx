import { useTodos } from '../hooks/useTodos';
import { TodoContext } from './TodoContext';

const TodoProvider = ({ children }) => {
  const todoData = useTodos();
  return (
    <TodoContext.Provider value={todoData}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
