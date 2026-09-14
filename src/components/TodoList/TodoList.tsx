import './TodoList.css';
import type { Todo } from '@/types/Todo';

interface TodoListProps {
  todos: Todo[];
  onToggle: (todoId: string) => void;
  onDelete: (todoId: string) => void;
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  const handleToggle = (todoId: string) => {
    onToggle(todoId);
  };

  const handleDeleteButtonClick = (todoId: string) => {
    const confirmDeleteTodo = confirm(`ID:${todoId}のタスクを削除します。`);

    if (confirmDeleteTodo) {
      onDelete(todoId);
    }
  };

  return (
    <ul className='todo-list'>
      {todos.map((todo) => {
        return (
          <li className='todo-list-item' key={todo.id}>
            <label>
              <input
                type='checkbox'
                checked={todo.isCompleted}
                onChange={() => {
                  handleToggle(todo.id);
                }}
              />
              <span>{todo.title}</span>
            </label>
            <button onClick={() => handleDeleteButtonClick(todo.id)}>Del</button>
          </li>
        );
      })}
    </ul>
  );
}
