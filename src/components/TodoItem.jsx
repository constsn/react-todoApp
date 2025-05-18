import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export default function TodoItem({ todo }) {
  const {
    editingId,
    toggleTodo,
    editText,
    setEditText,
    saveEdit,
    startEdit,
    deleteTodo,
  } = useContext(TodoContext);

  return (
    <li key={todo.id}>
      <div className="text-group">
        <input
          type="checkbox"
          onChange={() => toggleTodo(todo.id)}
          checked={todo.isChecked}
        />
        {editingId === todo.id ? (
          <input
            type="text"
            value={editText}
            onChange={e => setEditText(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') saveEdit(todo.id);
            }}
          />
        ) : (
          <span
            style={todo.isChecked ? { textDecoration: 'line-through' } : {}}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="btn-group">
        <button onClick={() => startEdit(todo)}>編集</button>
        <button onClick={() => deleteTodo(todo.id)}>削除</button>
      </div>
    </li>
  );
}
