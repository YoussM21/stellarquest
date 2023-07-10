import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Destinations from "./Destinations";
import News from "./News";
import POTD from "./POTD";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/destination">
              <Destinations />
            </Route>
            <Route exact path="/News">
              <News />
            </Route>
            <Route exact path="/POTD">
              <POTD />
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
