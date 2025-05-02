import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  // 追加
  function handleAddTodo(newTodo) {
    setTodos(prevTodos => [...prevTodos, newTodo]);
    // 状態(state: todos)を更新 ▶︎ 再レンダリング
  }

  // 削除
  function handleDeleteTodo(id) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  // 切替
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

  function handleClick() {
    const newTodo = { text: text, id: Date.now(), isChecked: false };
    onAddTodo(newTodo); // 配列にnewTodoオブジェクトを保存
    setText(''); // 👇value={text} を空にする
  }

  return (
    <div>
      <input
        type="text"
        placeholder="今日のやること"
        value={text} // 状態(text)反映
        onChange={e => {
          setText(e.target.value); // 状態(text)更新
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') handleClick();
        }}
      />
      <button onClick={handleClick}>追加</button>
    </div>
  );
}

// --- Todo リスト ---
function TodoList({ todos, onDeleteTodo, onToggleTodo }) {
  return (
    <ul>
      {todos.map(({ text, id, isChecked }) => {
        if (!text.trim()) return; // 空文字ブロック
        return (
          <li key={id}>
            <input type="checkbox" onChange={() => onToggleTodo(id)} />
            <span style={isChecked ? { textDecoration: 'line-through' } : {}}>
              {text}
            </span>
            <button onClick={() => onDeleteTodo(id)}>削除</button>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
