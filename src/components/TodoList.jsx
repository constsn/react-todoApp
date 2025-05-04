import { useState } from 'react';
import TodoItem from './TodoItem';
import TodoSort from './TodoSort';

// --- Todo リスト ---
export default function TodoList({ todos, onDeleteTodo, onToggleTodo }) {
  const [sortBy, setSortBy] = useState('input');
  // <option>のvalueをstateで管理
  let sortedTodos = [...todos];

  if (sortBy === 'text') {
    sortedTodos = [...todos].sort((a, b) => a.text.localeCompare(b.text));
  } else if (sortBy === 'isChecked') {
    sortedTodos = [...todos].sort(
      (a, b) => Number(a.isChecked) - Number(b.isChecked)
    );
  }

  return (
    <>
      <ul className="todo-list">
        {sortedTodos
          .filter(todo => todo.text.trim())
          .map(todo => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
              />
            );
          })}
      </ul>
      <TodoSort sortBy={sortBy} setSortBy={setSortBy} />
    </>
  );
}
