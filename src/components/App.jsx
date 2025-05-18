import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoSort from './TodoSort';
import TodoProvider from '../context/TodoProvider';
import TodoSearch from './TodoSearch';

function App() {
  return (
    <div className="container">
      <h1>Todoリスト</h1>
      <TodoProvider>
        <TodoSearch />
        <TodoForm />
        <TodoList />
        <TodoSort />
      </TodoProvider>
    </div>
  );
}

export default App;
