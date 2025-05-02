import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(newTodo) {
    setTodos(prevTodos => [...prevTodos, newTodo]);
    // 状態(state: todos)を更新 ▶︎ 再レンダリング
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

  return (
    <div className="container">
      <h1>Todoリスト</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

// --- Todo フォーム ---
function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('');

  function handleAddClick() {
    const newTodo = { id: Date.now(), text: text, isChecked: false };
    onAddTodo(newTodo);
    setText(''); // 👇 value={text} を空にする
  }

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="今日のやること"
        value={text} // 状態(text)反映
        onChange={e => {
          setText(e.target.value); // 状態(text)更新
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') handleAddClick();
        }}
      />
      <button onClick={handleAddClick}>追加</button>
    </div>
  );
}

// --- Todo リスト ---
function TodoList({ todos, onDeleteTodo, onToggleTodo }) {
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

  console.log(sortedTodos);

  return (
    <>
      <ul className="todo-list">
        {sortedTodos.map(todo => {
          // 空文字ブロック
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

function TodoItem({ todo, onDeleteTodo, onToggleTodo }) {
  if (!todo.text.trim()) return;
  return (
    <li key={todo.id}>
      <div className="text-group">
        <input type="checkbox" onChange={() => onToggleTodo(todo.id)} />
        <span style={todo.isChecked ? { textDecoration: 'line-through' } : {}}>
          {todo.text}
        </span>
      </div>
      <button onClick={() => onDeleteTodo(todo.id)}>削除</button>
    </li>
  );
}

function TodoSort({ sortBy, setSortBy }) {
  return (
    <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
      <option value="input">入力順</option>
      <option value="text">名前順</option>
      <option value="isChecked">完了順</option>
    </select>
  );
}

export default App;
