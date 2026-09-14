import './App.css';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList';
import type { Todo } from '@/types/Todo';

function App() {
  const todos: Array<Todo> = [
    { id: '1', title: 'タスク1', isCompleted: false },
    { id: '2', title: 'タスク2', isCompleted: false },
    { id: '3', title: 'タスク3', isCompleted: false },
    { id: '4', title: 'タスク4', isCompleted: false },
    { id: '5', title: 'タスク5', isCompleted: false },
  ];

  return (
    <>
      <TodoList todos={todos} />
      <TodoForm />
    </>
  );
}

export default App;
