import './App.css'
import { BoardComponent } from './components/BoardComponent';

const App = () => {
  console.log('app render');
  // if (currentPlayer.role == spymaster) {
  //   getGameState(currentPlayer)
  //   {cards: []}
  //   cards include color/side
  // }
  // if (currentPlayer.role == operative) {
  //   getGameState(currentPlayer)
  //   {cards: []}
  //   cards only include color/side if already flipped
  // }
  // flipCard(index, currentPlayer)
  // => all players notified & get new game state
  return (
    <>
      <BoardComponent />
    </>
  );
};

export { App };
