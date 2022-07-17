import React from 'react';
import wizard from "../img/wizard.png";

import "./nomatch.css";

const NoMatch = () => {
  return (
    <div className='noMatch'>
      <img src={wizard} alt="wizard" />
      <div className="oops">You seem to be lost.</div>
    </div>
  );
};

export default NoMatch;