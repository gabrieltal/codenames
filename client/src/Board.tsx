import { Card } from './Card';

const Board = () => {
  const cards = [
    'sleep', 'hello', 'bye', 'cry', 'fly',
    'ghost', 'ron burgundy', 'shrink', 'harrison ford', 'broccoli',
    'honey', 'bee', 'tea', 'water', 'phone',
    'cat', 'meow', 'dog', 'woof', 'bark',
    'tree', 'leaf', 'plant', 'orange', 'apple',
  ];
  return (
    <div className="board">
      {cards.map((word) => <Card word={word}/>)}
    </div>
  );
};

export { Board };
