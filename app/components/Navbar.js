import React from 'react';
import { Link } from 'react-router';

export default function (props) {

  return (

    <nav>
      <div id="nav-menu-left">
        <Link to='/home'><h4>Home</h4></Link>
        <Link to='/builder'><h4>Create</h4></Link>
      </div>
      <div id="nav-menu-right">
        <h4>Sign In</h4>
        <h4>Account</h4>
      </div>
    </nav>

  );

}
