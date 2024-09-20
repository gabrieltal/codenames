import { Card as CardComponent } from './Card';
import { Card } from '../models/Card';
import { useState } from 'react';

const Board = () => {
  const initialCards = [
    {
      "word": "sleep",
      "flipped": false,
      "color": "orange"
    },
    {
      "word": "hello",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "bye",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "cry",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "fly",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "ghost",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "ron burgundy",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "shrink",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "harrison ford",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "broccoli",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "honey",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "bee",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "tea",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "water",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "phone",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "cat",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "meow",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "dog",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "woof",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "bark",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "tree",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "leaf",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "plant",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "orange",
      "flipped": false,
      "color": "blue"
    },
    {
      "word": "apple",
      "flipped": false,
      "color": "blue"
    }
  ];

  const [cards, setCards] = useState(initialCards);

  const flipCard = (index: number) => {
    const newCard = {...cards[index], "flipped": true };

    const newCards = [...cards];
    newCards[index] = newCard;

    setCards(newCards);
  }

  return (
    <div className="board">
      {cards.map((card, index) => <CardComponent card={card} index={index} flipCard={flipCard}/>)}
    </div>
  );
};

export { Board };
