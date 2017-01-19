import React from 'react';
import { Link } from 'react-router';

import Navbar from './Navbar';
import Background from './HomeBgImage';
import Descriptions from './HomeDescriptions';
import StartBar from './HomeStartBar';
import Footer from './Footer'

export default function (props) {

  return (

    <div>
      <Navbar />
      <Background />
      <Descriptions />
      <StartBar />
      <Footer />
    </div>

  );

}
