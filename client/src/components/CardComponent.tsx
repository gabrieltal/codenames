import { Card } from '../models/Card';

interface CardComponentProps {
  card: Card;
  index: number;
  flipCard: (index: number) => void; 
}

function CardComponent({ card, index, flipCard }: CardComponentProps) {
  console.log("card.render");
  return (
    <div className={ "card " + (card.flipped ? card.color : '') } onClick={() => flipCard(index)}>
      { !card.flipped && card.word }
      { card.flipped && 'FLIPPED' }
    </div>
  );
};

export { CardComponent };
