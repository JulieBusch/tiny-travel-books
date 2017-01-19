import React from 'react';
import { Link } from 'react-router';

export default function (props) {

  return (

    <div className="container">
      <div>
        <h1 id="tailored">miniature travel guides tailored to your adventure</h1>
      </div>
      <div className="row">
        <div className="column-3">
          <h3>Everything You Need</h3>
          <p>
            Have important information, like contact numbers, traveler's insurance, and hotel addresses close at hand.
          </p>
        </div>
        <div className="column-3">
          <h3>Pick Places to Explore</h3>
          <p>
            Add places of interest complete with maps, hours of operation, and more! Browse our categories or add your own establishments. See and do all the things you want to without being weighed down by pages you don't need!
          </p>
        </div>
        <div className="column-3">
          <h3>Put it in Your Pocket and Go!</h3>
          <p>
            Tiny Travel Books are small, flexible, and durable. They're made to be kept in your pocket so that you always have everything you need close at hand in a convenient, compact package.
          </p>
        </div>
      </div>
    </div>

  );

}
