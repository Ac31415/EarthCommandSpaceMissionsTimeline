import './App.css';
import { Timeline } from './Timeline/Timeline';
// import { Storybook } from './Storybook/Storybook';
//
// import { render } from 'react-dom';
// import FigmaEmbed from 'react-figma-embed';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Team Name: Earth Mission</h1>

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
