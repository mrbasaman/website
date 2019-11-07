// Library imports aka from an npm
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Other files in project imports
import { HOME, ABOUT, CONTACT } from "./constants/Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// My own file imports
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path={HOME}>
          <Home />
        </Route>
        <Route path={ABOUT}>
          <About />
        </Route>
        <Route path={CONTACT}>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
