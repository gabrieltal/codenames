import { CardComponent } from './CardComponent';

const BoardComponent = (props: any) => {
  return (
    <div className="board">
      {props.gameState && props.gameState.cards.map((card: any, index: any) => <CardComponent card={card} index={index} flipCard={props.flipCard}/>)}
    </div>
  );
};

export { BoardComponent };
