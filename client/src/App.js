import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";
import SingleCampaign from "./pages/SingleCampaign";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
           <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
              path="/campaign/:id"
              element={<SingleCampaign />}
            />
          <Route
            path="*"
            element={<NoMatch />}
          />
        </Routes>
      </div >
      <Footer />
    </Router>

  );
}

export default App;
