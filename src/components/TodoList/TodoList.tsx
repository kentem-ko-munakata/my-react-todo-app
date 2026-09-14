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

  const handleDeleteButtonClick = (todo: Todo) => {
    const confirmDeleteTodo = confirm(`ID:${todo.id}\nタイトル:${todo.title}\nを削除します。`);

    if (confirmDeleteTodo) {
      onDelete(todo.id);
    }
  };

  return (
    <ul className='todo-list'>
      {todos.map((todo) => {
        return (
          <li className='todo-list-item' key={todo.id}>
            <label className='todo-list-item-label'>
              <input
                className='todo-list-item-checkbox'
                type='checkbox'
                checked={todo.isCompleted}
                onChange={() => {
                  handleToggle(todo.id);
                }}
              />
              <span className='todo-list-item-title'>{todo.title}</span>
            </label>
            <button className='todo-list-item-delete-button' onClick={() => handleDeleteButtonClick(todo)}>
              Del
            </button>
          </li>
        );
      })}
    </ul>
  );
}
