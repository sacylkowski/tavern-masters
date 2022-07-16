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
      <div className="header">

        <Link to="/home" className="hometitle">
          <h1>Tavern Masters</h1>
        </Link>

        <nav className="nav">
          <Link className='navtitle' to="/home">View Campaigns</Link>
          {Auth.loggedIn() ? (
            <>
              <Link className="navtitle" to="/profile">My Profile</Link>
              <Link className='navtitle' to="/create-campaign" campaign={true}>Create Campaign</Link>
              <Link className='navtitle' to="/create-encounter">Create Encounter</Link>
              <a href="/" onClick={logout} className="navtitle">
                Logout
              </a>
            </>
          ) : (
            <>
              <Link className='navtitle' to="/login">Login</Link>
              <Link className='navtitle' to="/">Signup</Link>
            </>
          )}
        </nav>
      </div>

    </header>
  )
}

export default Header;