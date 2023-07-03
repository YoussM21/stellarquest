import "./App.css";
import Title from "./Title";
import DestinationBox from "./DestinationBox";
import ImagesGroup from "./ImagesGroup";
import Reviews from "./Reviews";
import PeopleInSpace from "./PeopleInSpace";
import spaceship from "./images/spaceship.png";

function Home() {
  return (
    <div className="App">
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
    </div>
  );
}

export default Home;