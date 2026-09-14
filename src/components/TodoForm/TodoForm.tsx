import { useState, type ChangeEvent } from 'react';
import './TodoForm.css';

export function TodoForm() {
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

    // 追加用の関数呼び出し
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <label htmlFor='todo-title'></label>
      <input
        id='todo-title'
        name='title'
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
