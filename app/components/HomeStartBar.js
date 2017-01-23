import React from 'react';
import { Link } from 'react-router';

export default function (props) {

  return (

    <div className="start-bar">
      <Link to='/builder'>
        <button id="start">
          <span>Get Started</span>
        </button>
      </Link>
    </div>

  );

}
