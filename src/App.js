import "./App.css";
import Navbar from "./Navbar";
import Title from "./Title";
import DestinationBox from "./home/DestinationBox";
import spaceship from './images/spaceship.png';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="hero-section">
        <Title></Title>
        <div className="home-image">
          <div className="space-ship-wrapper">
            <img className="space-ship" alt="SpaceShip" src={ spaceship }/>
          </div>
        </div>
      </div>
      <DestinationBox></DestinationBox>
    </div>
  );
}

export default App;
