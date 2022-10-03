import './App.css';
import { MissionCard } from './MissionsContainer/MissionCard'
import {missions } from './MissionsContainer/MissionsMock'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  const mission = { name: "ACE", icon: "ACE-sm.png" }
    const imageLocation = `${process.env.PUBLIC_URL}/missions/${mission.icon}`
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Team Name: Earth Mission</h1>
      </header>
      <section>
        <Container>
        <Row className="justify-content-md-center">
        {missions.map(mission => {
          return (
            <MissionCard
              name={mission.name}
              icon={mission.icon}
              description={mission.description}
            />
          );
        })}
        </Row>
        </Container>

        <img src={imageLocation} height="40" width="80" alt=''/>

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
