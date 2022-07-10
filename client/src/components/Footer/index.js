import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="">
            <p><strong>&copy;2022 Campaign Generator</strong> by <Link to={{ pathname: "" }} target="_blank">Erik Rockenmeyer</Link>,
            <Link to={{ pathname: "https://sacylkowski.github.io/react-portfolio/" }} target="_blank">Sarah Cylkowski</Link>, <Link to={{ pathname: "" }} target="_blank">Alexander Lu</Link>,
            <Link to={{ pathname: "" }} target="_blank">Thomas Ruppeniner</Link>, and <Link to={{ pathname: "" }} target="_blank">Grace Marcoux</Link>.
            </p>
        </footer>
    );
};

export default Footer;