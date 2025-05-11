import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoSort from './TodoSort';
import { useTodos } from '../hooks/useTodos';

function App() {
  const {
    todos,
    sortedTodos,
    sortBy,
    setSortBy,
    editingId,
    editText,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
    handleStartEdit,
    handleSaveEdit,
    setEditText,
  } = useTodos();

  return (
    <div className="container">
      <h1>Todoリスト</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        sortedTodos={sortedTodos}
        editingId={editingId}
        editText={editText}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
        onStartEdit={handleStartEdit}
        onEditText={setEditText}
        onSaveEdit={handleSaveEdit}
      />
      {todos.length > 0 && <TodoSort sortBy={sortBy} setSortBy={setSortBy} />}
    </div>
  );
}

export default App;
