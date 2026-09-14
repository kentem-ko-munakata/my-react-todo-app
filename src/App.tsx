import { useState } from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList';
import type { Todo } from '@/types/Todo';

function App() {
  const initTodos: Todo[] = [
    { id: '1', title: 'タスク1', isCompleted: false },
    { id: '2', title: 'タスク2', isCompleted: false },
    { id: '3', title: 'タスク3', isCompleted: false },
    { id: '4', title: 'タスク4', isCompleted: false },
    { id: '5', title: 'タスク5', isCompleted: false },
  ];

  const [todos, setTodos] = useState<Todo[]>(initTodos);

  const onAdd = (title: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      isCompleted: false,
    };

    setTodos((currentTodos) => [...currentTodos, newTodo]);
  };

  const onToggle = (todoId: string) => {
    console.log('onToggle呼び出し');
  };

  const onDelete = (todoId: string) => {
    setTodos((currentTodo) => currentTodo.filter((todo) => todo.id !== todoId));
  };

  return (
    <>
      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
      <TodoForm onAdd={onAdd} />
    </>
  );
}

export default App;
