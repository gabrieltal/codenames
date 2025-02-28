import { ApolloClient, InMemoryCache, OperationVariables, gql } from "@apollo/client/core/index.js";
import './App.css'
import { BoardComponent } from './components/BoardComponent';
import { useEffect, useState } from "react";
import { Card } from "./models/Card";

interface Data {
  game: Game;
};

interface Game {
  cards: Array<Card>;
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

  const [gameState, setGameState] = useState(null as any);
  const getGameState = async () => {
    console.log("App.load.query start");
    const client = new ApolloClient({
      uri: "/api/graphql",
      cache: new InMemoryCache(),
    });
    const {data} = await client.query<Data, OperationVariables>({
      query: gql`
        query Game($id: Int!) {
          game(id: $id) {
            urlIdentifier
            players {
              name
              spyMaster
              team
            }
            cards {
              color
              flipped
              index
              word
            }
            logs {
              clue
              message
              guess
              player
              winningTeam
            }
          }
        }
      `,
      variables: {id: 1},
  });
    console.log(`data: ${JSON.stringify(data, null, 2)}`);
    // console.log(`data.gameState.board: ${data.gameState.board.length}`);
    // console.log(`data.gameState.board[0].word: ${data.gameState.board[0].word}`);
    console.log("App.load.query done");
    setGameState(data.game);
  };

  useEffect(() => {
    console.log("App.load");
    getGameState();
    console.log("App.load done");
  }, []);

  const flipCard = async (index: number) => {
    console.log(`App.flipCard(${index})`);
    const client = new ApolloClient({
      uri: "/api/graphql",
      cache: new InMemoryCache(),
    });
    await client.mutate({
      mutation: gql`
        mutation FlipCard($index: Int!) {
          flipCard(index: $index) {
            color
            flipped
            word
            index
          }
        }
      `,
      variables: {index},
    });
    getGameState();
  }

  return (
    <div className="game">
      <BoardComponent gameState={gameState} flipCard={flipCard} />
      <div className="log">
        <div className="log-entry">
          <div className="player blue">liv</div>
          <div className="message">gives clue</div>
          <div className="clue">green 1</div>
        </div>
        <div className="log-entry">
          <div className="player blue">christine</div>
          <div className="message">taps</div>
          <div className="guess blue">leaf</div>
        </div>
        <div className="log-entry">
          <div className="player blue">christine</div>
          <div className="message">taps</div>
          <div className="guess beige">leaf</div>
        </div>
        <div className="log-entry">
          <div className="player blue">christine</div>
          <div className="message">ends guessing</div>
        </div>
        <div className="log-entry">
          <div className="player orange">gabe</div>
          <div className="message">gives clue</div>
          <div className="clue">bad 5</div>
        </div>
        <div className="log-entry">
          <div className="player orange">alex</div>
          <div className="message">taps</div>
          <div className="guess orange">tea</div>
        </div>
        <div className="log-entry">
          <div className="player orange">alex</div>
          <div className="message">taps</div>
          <div className="guess black">tea</div>
        </div>
        <div className="log-entry">
          <div className="win blue">blue team wins</div>
        </div>
        <div className="log-entry">
          <div className="win orange">orange team wins</div>
        </div>


      </div>
    </div>
  );
};

export { App };
