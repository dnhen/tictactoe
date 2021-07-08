import Header from './components/Header';
import Game from './components/Game';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Game />
      </div>
    </div>
  );
}

export default App;