import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import ProtectRoute from "./components/BubblesProtect";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
        <>
          <div className="container">
            <Link to="/">Login</Link>
            <Link to="/bubble">Bubbles</Link>
          </div>

          <Route exact path="/" component={Login} />
          <ProtectRoute path="/bubble" component={BubblePage}></ProtectRoute>
        </>
      </div>
    </Router>
  );
}

export default App;
