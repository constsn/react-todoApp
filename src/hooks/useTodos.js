import { useState } from 'react';
import { useLocalStorageState } from './useLocalStorageState';

export const useTodos = () => {
  const [sortBy, setSortBy] = useState('input');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [todos, setTodos] = useLocalStorageState([], 'todos');

  let sortedTodos = [...todos];
  if (sortBy === 'text') {
    sortedTodos = [...todos].sort((a, b) => a.text.localeCompare(b.text));
  } else if (sortBy === 'isChecked') {
    sortedTodos = [...todos].sort(
      (a, b) => Number(a.isChecked) - Number(b.isChecked)
    );
  }

  function handleAddTodo(text) {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Date.now(), text, isChecked: false },
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

  return {
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
  };
};
