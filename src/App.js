import './App.css';
import { Timeline } from './Timeline/Timeline'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Team Name: Earth Mission</h1>
      </header>
      <section>
        <Timeline />
        <h2>Team members:</h2>
        <ul>
          <li>
            <h5>Natalia Bulaieva</h5>
          </li>
          <li>
            <h5>Byron Torres</h5>
          </li>
          <li>
            <h5>Shaurya Sareen</h5>
          </li>
          <li>
            <h5>Samar AboulEla</h5>
          </li>
          <li>
            <h5>Wen-Chung Cheng</h5>
          </li>
          <li>
            <h5>Lily MacFaydian</h5>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
