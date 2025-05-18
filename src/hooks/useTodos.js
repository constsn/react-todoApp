import { useState } from 'react';
import { useLocalStorageState } from './useLocalStorageState';

export const useTodos = () => {
  const [todos, setTodos] = useLocalStorageState([], 'todos');
  const [sortBy, setSortBy] = useState('input');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [searchText, setSearchText] = useState('');

  let sortedTodos = [...todos];

  if (sortBy === 'text') {
    sortedTodos = [...todos].sort((a, b) => a.text.localeCompare(b.text));
  } else if (sortBy === 'isChecked') {
    sortedTodos = [...todos].sort(
      (a, b) => Number(a.isChecked) - Number(b.isChecked)
    );
  }

  const addTodo = text => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Date.now(), text, isChecked: false },
    ]);
  };

  const deleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const toggleTodo = id => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  const startEdit = todo => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = id => {
    if (!editText.trim()) return;
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    setEditingId(null);
    setEditText('');
  };

  return {
    sortedTodos,
    sortBy,
    setSortBy,
    editingId,
    editText,
    setEditText,
    addTodo,
    deleteTodo,
    toggleTodo,
    startEdit,
    saveEdit,
    searchText,
    setSearchText,
  };
};
