import './TodoList.css';
import type { Todo } from '@/types/Todo';

interface TodoListProps {
  todos: Todo[];
}

export function TodoList({ todos }: TodoListProps) {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => {
        return (
          <li className='todo-list-item' key={todo.id}>
            {todo.title}
          </li>
        );
      })}
    </ul>
  );
}
