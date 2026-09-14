import './TodoHeader.css';

interface TodoHeaderProps {
  onPurge: () => void;
}

export function TodoHeader({ onPurge }: TodoHeaderProps) {
  const handlePurgeButtonClick = () => {
    onPurge();
  };

  return (
    <div className='header'>
      <h1 className='header-title'>Todos</h1>
      <button className='header-purge-button' onClick={handlePurgeButtonClick}>
        Purge
      </button>
    </div>
  );
}
