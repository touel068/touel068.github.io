import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home,HomeFrench, Dinosaurs, DinosaursAfrica,DinosaursNorthAmerica, Activities, Tickets } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/fr" exact component={() => <HomeFrench />} />
          <Route path="/dinosaurs" exact component={() => <Dinosaurs />} />
          <Route path="/africa" exact component={() => <DinosaursAfrica/>} />
          <Route path="/northamerica" exact component={() => <DinosaursNorthAmerica/>} />
          <Route path="/activities" exact component={() => <Activities />} />
          <Route path="/tickets" exact component={() => <Tickets />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;