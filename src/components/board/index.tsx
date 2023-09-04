import './index.css';

interface BoardProps {
  children: React.ReactNode;
}

function Board({ children }: BoardProps) {
  return <div className='board-wrapper'>{children}</div>;
}

export default Board;
