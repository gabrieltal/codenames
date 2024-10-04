import { CardComponent } from './CardComponent';
import { Card } from '../models/Card';
import { useState } from 'react';

const BoardComponent = () => {
  const initialCards = [
    new Card({word: "water", flipped: false, color: "blue"}),
    new Card({word: "dog", flipped: false, color: "black"}),
    new Card({word: "bye", flipped: false, color: "orange"}),
    new Card({word: "bark", flipped: false, color: "biege"}),
    new Card({word: "tea", flipped: false, color: "blue"}),
    new Card({word: "plant", flipped: false, color: "biege"}),
    new Card({word: "cry", flipped: false, color: "orange"}),
    new Card({word: "bee", flipped: false, color: "blue"}),
    new Card({word: "broccoli", flipped: false, color: "blue"}),
    new Card({word: "leaf", flipped: false, color: "biege"}),
    new Card({word: "fly", flipped: false, color: "orange"}),
    new Card({word: "woof", flipped: false, color: "biege"}),
    new Card({word: "ron burgundy", flipped: false, color: "orange"}),
    new Card({word: "orange", flipped: false, color: "biege"}),
    new Card({word: "honey", flipped: false, color: "blue"}),
    new Card({word: "hello", flipped: false, color: "orange"}),
    new Card({word: "tree", flipped: false, color: "biege"}),
    new Card({word: "harrison ford", flipped: false, color: "orange"}),
    new Card({word: "apple", flipped: false, color: "biege"}),
    new Card({word: "phone", flipped: false, color: "blue"}),
    new Card({word: "cat", flipped: false, color: "blue"}),
    new Card({word: "shrink", flipped: false, color: "orange"}),
    new Card({word: "sleep", flipped: false, color: "orange"}),
    new Card({word: "ghost", flipped: false, color: "orange"}),
    new Card({word: "meow", flipped: false, color: "blue"}),
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

export { BoardComponent };
