import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <p className="footerwords"><strong>&copy;2022 Campaign Generator</strong> by: <br />
            <Link className="name" to={{ pathname: "https://erockenmeyer.github.io/Portfolio" }} target="_blank">Erik Rockenmeyer</Link>,
            <Link className="name" to={{ pathname: "https://sacylkowski.github.io/react-portfolio/" }} target="_blank"> Sarah Cylkowski</Link>, <Link className="name" to={{ pathname: "" }} target="_blank"> Alexander Lu</Link>,
            <Link className="name" to={{ pathname: "" }} target="_blank"> Thomas Ruppeniner</Link>, and <Link className="name" to={{ pathname: "https://github.com/gmmarcoux" }} target="_blank">Grace Marcoux</Link>. <br />
            <Link className="site" to={{ pathname: "https://warm-cove-70741.herokuapp.com/" }} target="_blank">Check out our character generator here</Link>
            </p>
        </div>
    );
};

export default Footer;