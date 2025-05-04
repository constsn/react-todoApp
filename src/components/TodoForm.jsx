import { useState } from 'react';

// --- Todo フォーム ---
export default function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('');

  function handleAddClick() {
    onAddTodo(text); // --3
    setText(''); // 👇 value={text} を空にする --4
  }

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="今日のやること"
        value={text} // 状態(text)反映 --2
        onChange={e => {
          setText(e.target.value); // 状態(text)更新 --1
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') handleAddClick();
        }}
      />
      <button onClick={handleAddClick}>追加</button>
    </div>
  );
}
