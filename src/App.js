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

      <h2>Team Name: Earth Command</h2>
      <h3>Team members</h3>

      <ul>
        <li><h5>List Item 1</h5></li>
        <li><h5>List Item 1</h5></li>
        <li><h5>List Item 1</h5></li>
        <li><h5>List Item 1</h5></li>
        <li><h5>List Item 1</h5></li>
      </ul>

      <Timeline />
    </div>
  );
}

export default App;
