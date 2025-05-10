export default function TodoItem({
  todo,
  editingId,
  editText,
  onDeleteTodo,
  onToggleTodo,
  onStartEdit,
  onEditText,
  onSaveEdit,
}) {
  return (
    <li key={todo.id}>
      <div className="text-group">
        <input
          type="checkbox"
          onChange={() => onToggleTodo(todo.id)}
          checked={todo.isChecked}
        />
        {editingId === todo.id ? (
          <input
            type="text"
            value={editText}
            onChange={e => onEditText(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') onSaveEdit(todo.id);
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
        <button onClick={() => onStartEdit(todo)}>編集</button>
        <button onClick={() => onDeleteTodo(todo.id)}>削除</button>
      </div>
    </li>
  );
}
