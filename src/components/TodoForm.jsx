import { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

export default function TodoForm() {
  const { addTodo } = useContext(TodoContext);
  const [text, setText] = useState('');

  function handleAddClick() {
    addTodo(text);
    setText('');
  }

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="今日のやること..."
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <button onClick={handleAddClick}>追加</button>
    </div>
  );
}
