import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(todo) {
    setTodos(prev => [...prev, todo]); // 状態(state: todos)を更新
  }

  return (
    <div>
      <h1>Todoリスト</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('');

  function handleClick() {
    const todo = { text, id: Date.now() };
    onAddTodo(todo); // 配列にtodoオブジェクトを保存
    setText('');
  }

  return (
    <div>
      <input
        type="text"
        placeholder="ここに入力してください"
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

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(({ text, id }) => {
        if (!text.trim()) return; // 空文字ブロック
        return <li key={id}>{text}</li>;
      })}
    </ul>
  );
}

export default App;
