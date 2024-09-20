import { Card as CardModel } from '../models/Card';

interface CardProps {
  card: CardModel;
  index: number;
  flipCard: Function; 
}

function Card({ card, index, flipCard }: CardProps) {


  return (
    <div className={ "card " + (card.flipped ? card.color : '') } onClick={() => flipCard(index)}>
      { !card.flipped && card.word }
      { card.flipped && 'FLIPPED' }
    </div>
  );
};

export { Card };
