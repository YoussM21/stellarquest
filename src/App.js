import "./App.css";
import Navbar from "./Navbar";
import Title from "./Title";
import DestinationBox from "./DestinationBox";
import ImagesGroup from "./ImagesGroup";
import Reviews from "./Reviews";
import PeopleInSpace from "./PeopleInSpace";
import Footer from "./Footer";
import spaceship from "./images/spaceship.png";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="hero-section">
        <Title></Title>
        <div className="home-image">
          <div className="space-ship-wrapper">
            <img className="space-ship" alt="SpaceShip" src={spaceship} />
          </div>
        </div>
      </div>
      <DestinationBox></DestinationBox>
      <ImagesGroup></ImagesGroup>
      <Reviews></Reviews>
      <PeopleInSpace></PeopleInSpace>
      <Footer></Footer>
    </div>
  );
}

export default App;
