import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import Modal from '../Modal';
import "./header.css";

const Header = () => {
  const [show, setShow] = useState(false)

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <div className="">

        <Link to="/home">
          <h1>Tavern Masters</h1>
        </Link>

        <nav className="nav">
          <Link to="/home">View Campaigns</Link>
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">My Profile</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
              {/* modal will show when user is logged in */}
              <div className="">
                <button onClick={() => setShow(true)}>Create Campaign</button>
                <Modal onClose={() => setShow(false)} show={show} />
              </div>
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