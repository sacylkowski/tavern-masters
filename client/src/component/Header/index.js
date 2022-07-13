import React from 'react'
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import "./header.css";

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <div>

        <Link to="/home">
          <h1>Tavern Masters</h1>
        </Link>

        <nav className="">
        <Link to="/home">View Campaigns</Link>
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Profile</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>

    </header>
  )
}

export default Header;