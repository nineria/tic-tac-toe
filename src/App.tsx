import Layout from './components/layout';
import Board from './components/board';
import { useState } from 'react';
import Button from './components/button';
import Header from './components/header';
import './App.css';
import Text from './components/text';

type SquareValue = 'X' | 'O' | null;

function App() {
  const [board, setBoard] = useState<SquareValue[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const winner = calculateWinner(board);
  const status = winner
    ? `${winner} is the WINNER!!!`
    : `Next Player: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = (index: number) => {
    if (calculateWinner(board) || board[index]) {
      return;
    }

    const newBoard = [...board];

    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index: number) => {
    return (
      <button
        className={`square-button`}
        disabled={!!board[index]}
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </button>
    );
  };

  return (
    <Layout>
      <Header>Tic Tac Toe</Header>
      <Text>{status}</Text>
      <Board>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </Board>
      <Board>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </Board>
      <Board>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </Board>
      <br />
      <Button onClick={() => setBoard(Array(9).fill(null))}>Reset board</Button>
    </Layout>
  );
}

function calculateWinner(squares: SquareValue[]): SquareValue | null {
  const winLines: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of winLines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
