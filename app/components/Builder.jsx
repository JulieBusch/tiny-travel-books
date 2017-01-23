import React from 'react';
import { Link } from 'react-router';

import Navbar from './Navbar';
import Footer from './Footer';

export default class Builder extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Navbar />

        <Footer />
      </div>
    )
  }
}
