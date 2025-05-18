import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoSearch = () => {
  const { searchText, setSearchText } = useContext(TodoContext);

  return (
    <div>
      <span>検索</span>
      <input
        type="text"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        placeholder="検索..."
      />
    </div>
  );
};

export default TodoSearch;
