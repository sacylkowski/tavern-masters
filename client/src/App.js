import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from "./components/Footer";
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Profile from './pages/Profile';
import NoMatch from "./pages/NoMatch";


function App() {
  return (
    <Router>
      <div className="">
        <h1>Tavern Masters</h1>
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          {/* <Route
            path="/profile"
            element={<Profile />}
          /> */}
          <Route
            path="*"
            element={<NoMatch />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
