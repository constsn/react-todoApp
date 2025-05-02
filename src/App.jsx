import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(todo) {
    setTodos(prevTodos => [...prevTodos, todo]); // 状態(state: todos)を更新
  }

  function handleDeleteTodo(id) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  return (
    <div className="container">
      <h1>Todoリスト</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('');

  function handleClick() {
    const newTodo = { text, id: Date.now() };
    onAddTodo(newTodo); // 配列にtodoオブジェクトを保存
    setText('');
  }

  return (
    <div>
      <input
        type="text"
        placeholder="今日のやること"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') handleClick();
        }}
      />
      <button onClick={handleClick}>追加</button>
    </div>
  );
}

function TodoList({ todos, onDeleteTodo }) {
  return (
    <ul>
      {todos.map(({ text, id }) => {
        if (!text.trim()) return; // 空文字ブロック
        return (
          <li key={id}>
            {text} <button onClick={() => onDeleteTodo(id)}>削除</button>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
