import TodoItem from './TodoItem';

// --- Todo リスト ---
export default function TodoList({
  sortedTodos,
  editingId,
  editText,
  onDeleteTodo,
  onToggleTodo,
  onStartEdit,
  onEditText,
  onSaveEdit,
}) {
  return (
    <>
      <ul className="todo-list">
        {sortedTodos
          .filter(todo => todo.text.trim()) // 空文字ブロック
          .map(todo => {
            const itemProps = {
              editingId,
              editText,
              onDeleteTodo,
              onToggleTodo,
              onStartEdit,
              onEditText,
              onSaveEdit,
            };
            return <TodoItem key={todo.id} todo={todo} {...itemProps} />;
          })}
      </ul>
    </>
  );
}
