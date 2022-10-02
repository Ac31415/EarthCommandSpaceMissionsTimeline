import './App.css';
import { Timeline } from './Timeline/Timeline'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Team Name: Earth Command</h1>

        <img
          src={process.env.PUBLIC_URL + '/whiteLogo.png'}
          className="App-logo"
          alt="logo"
        />

        <h2>Team members:</h2>
        <ul>
          <li><h5>List Item 1</h5></li>
          <li><h5>List Item 1</h5></li>
          <li><h5>List Item 1</h5></li>
          <li><h5>List Item 1</h5></li>
          <li><h5>List Item 1</h5></li>
        </ul>

      </header>

      <Timeline />
    </div>
  );
}

export default App;
