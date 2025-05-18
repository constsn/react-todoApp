import TodoItem from './TodoItem';
import { TodoContext } from '../context/TodoContext';
import { useContext } from 'react';

export default function TodoList() {
  const { sortedTodos, searchText } = useContext(TodoContext);

  return (
    <ul className="todo-list">
      {sortedTodos.length > 0 ? (
        sortedTodos
          .filter(
            todo =>
              todo.text.trim() &&
              todo.text.toLowerCase().includes(searchText.toLowerCase())
          )
          .map(todo => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p>タスクが空です🈳</p>
      )}
    </ul>
  );
}
