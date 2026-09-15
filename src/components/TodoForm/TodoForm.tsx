import { useState, type ChangeEvent } from 'react';
import './TodoForm.css';

interface TodoFormProps {
  onAdd: (title: string) => void;
}

export function TodoForm({ onAdd }: TodoFormProps) {
  const [title, setTitle] = useState<string>('');

  function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedTitile = title.trim();

    if (!trimmedTitile) {
      return;
    }

    onAdd(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <input
        id='todo-title'
        name='title'
        aria-label='新規TODO'
        type='text'
        className='todo-form-input'
        onChange={handleTitleChange}
        value={title}
        required
      />
      <button type='submit' className='todo-form-button'>
        Add
      </button>
    </form>
  );
}
