import { useState } from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList';
import type { Todo } from '@/types/Todo';
import { TodoHeader } from './components/TodoHeader/TodoHeader';

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
    setTodos((currentTodos) =>
      currentTodos.map((todo) => (todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo)),
    );
  };

  const onDelete = (todoId: string) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== todoId));
  };

  const onPurge = () => {
    const completedTodos = todos.filter((todo) => todo.isCompleted);

    if (completedTodos.length === 0) {
      return;
    }

    const todoListText = completedTodos.map((todo) => `ID : ${todo.id} , タイトル : ${todo.title}`).join('\n');

    const confirmCompletedTodos = confirm(`以下の完了済みタスクを削除します。\n\n${todoListText}`);

    if (!confirmCompletedTodos) {
      return;
    }

    setTodos((currentTodos) => currentTodos.filter((todo) => !todo.isCompleted));
  };

  return (
    <div className='app'>
      <TodoHeader onPurge={onPurge} />
      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
      <TodoForm onAdd={onAdd} />
    </div>
  );
}

export default App;
