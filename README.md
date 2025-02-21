# codenames

- [logic](#logic)
- [setup](#setup)
- [run client](#run-client)
- [run server](#run-server)
- [play](#play)

## logic

- one team has 8
- one team has 9
- randomly orange or blue
- 1 assassin card (black)
- 7 innocent bystanders (beige)

## setup

- client uses javascript, node, npm, vite, typescript
- server uses ruby, bundler, rails

install dependencies

```
cd client
npm install
cd ..
cd server
bundle install
```

## run client

- run server first

```
cd client
vite dev
```

## run server

```
cd server
bundle exec rails s
```
## game graphql query
```query Game($id: Int!) {
  game(id: $id) {
    cards {
      color
      flipped
      index
      word
    }
    logs {
    clue
    message
    player
    winningTeam
  }
    players {
    name
    spyMaster
    team
  }
    urlIdentifier
  }
}```

## play

http://localhost:5173/
