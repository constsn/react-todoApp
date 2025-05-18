import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export default function TodoSort() {
  const { sortBy, setSortBy } = useContext(TodoContext);
  return (
    <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
      <option value="input">入力順</option>
      <option value="text">名前順</option>
      <option value="isChecked">完了順</option>
    </select>
  );
}
