import { ApolloClient, InMemoryCache, OperationVariables, gql } from "@apollo/client/core/index.js";
import './App.css'
import { BoardComponent } from './components/BoardComponent';
import { useEffect } from "react";
import { Card } from "./models/Card";

interface Data {
  gameState: GameState;
};

interface GameState {
  board: Array<Card>;
};

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

  useEffect(() => {
    console.log("App.load");
    (async () => {
      console.log("App.load.query start");
      const client = new ApolloClient({
        uri: "/api/graphql",
        cache: new InMemoryCache(),
      });
      const {data} = await client.query<Data, OperationVariables>({query: gql`
        query GameState {
          gameState {
            board {
              color
              flipped
              word
            }
          }
        }
      `});
      console.log(`data: ${JSON.stringify(data, null, 2)}`);
      console.log(`data.gameState.board: ${data.gameState.board.length}`);
      console.log(`data.gameState.board[0].word: ${data.gameState.board[0].word}`);
      console.log("App.load.query done");
    })();
    console.log("App.load done");
  }, []);
  
  return (
    <>
      <BoardComponent />
    </>
  );
};

export { App };
