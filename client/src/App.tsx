import './App.css'
import { BoardComponent } from './components/BoardComponent';

const App = () => {
  console.log('app render');
  return (
    <>
      <BoardComponent />
    </>
  );
};

export { App };
