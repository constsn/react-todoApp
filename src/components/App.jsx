import { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoSort from './TodoSort';

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [sortBy, setSortBy] = useState('input');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  let sortedTodos = [...todos];

  if (sortBy === 'text') {
    sortedTodos = [...todos].sort((a, b) => a.text.localeCompare(b.text));
  } else if (sortBy === 'isChecked') {
    sortedTodos = [...todos].sort(
      (a, b) => Number(a.isChecked) - Number(b.isChecked)
    );
  }

  function handleAddTodo(newText) {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Date.now(), text: newText, isChecked: false },
    ]);
  }

  function handleDeleteTodo(id) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  function handleToggleTodo(id) {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  }

  function handleStartEdit(todo) {
    setEditingId(todo.id);
    setEditText(todo.text);
  }

  function handleSaveEdit(id) {
    if (!editText.trim()) return;
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    setEditingId(null);
    setEditText('');
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
