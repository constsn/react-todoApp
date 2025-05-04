export default function TodoItem({ todo, onDeleteTodo, onToggleTodo }) {
  return (
    <li key={todo.id}>
      <div className="text-group">
        <input
          type="checkbox"
          onChange={() => onToggleTodo(todo.id)}
          checked={todo.isChecked}
        />
        <span style={todo.isChecked ? { textDecoration: 'line-through' } : {}}>
          {todo.text}
        </span>
      </div>
      <button onClick={() => onDeleteTodo(todo.id)}>削除</button>
    </li>
  );
}
