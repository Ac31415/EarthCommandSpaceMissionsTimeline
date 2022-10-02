import './App.css';
import { Timeline } from './Timeline/Timeline'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + '/whiteLogo.png'}
          className="App-logo"
          alt="logo"
        />
      </header>
      <Timeline />
    </div>
  );
}

export default App;
