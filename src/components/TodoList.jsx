import TodoItem from './TodoItem';
import TodoSort from './TodoSort';

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
  {
    /*const [sortBy, setSortBy] = useState('input');
  let sortedTodos = [...todos];

  if (sortBy === 'text') {
    sortedTodos = [...todos].sort((a, b) => a.text.localeCompare(b.text));
  } else if (sortBy === 'isChecked') {
    sortedTodos = [...todos].sort(
      (a, b) => Number(a.isChecked) - Number(b.isChecked)
    );
  }*/
  }

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
      {/* {todos.length > 0 && <TodoSort sortBy={sortBy} setSortBy={setSortBy} />}*/}
    </>
  );
}
