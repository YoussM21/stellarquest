import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Destinations from "./Destinations";
import News from "./News";
import POTD from "./POTD";
import Help from "./Help";

const basename =
  process.env.NODE_ENV === "production" ? "/stellarquest" : "/";

function App() {
  return (
    <Router basename={basename}>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/destinations" component={Destinations} />
            <Route exact path="/news" component={News} />
            <Route exact path="/potd" component={POTD} />
            <Route exact path="/help" component={Help} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
