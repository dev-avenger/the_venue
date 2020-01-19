import React, { Component } from 'react';
import {Element} from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured/index';
import VenueNfo from './components/venueNfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/footer';


class App extends Component {
  render() {
    return (
      <div className="App" style={{height:"1500px",background:"cornflowerblue"}}>
        <Header/>
        <Element name="eventStarts">
            <Featured/>
        </Element>
        <Element name="venueNFO">
            <VenueNfo/>
        </Element>
        <Element name="highlights">
            <Highlights/>
        </Element>
        <Element name="pricing">
            <Pricing/>
        </Element>
        <Element name="location">
            <Location/>
        </Element>
        <Footer/>
      </div>
    );
  }
}

export default App;
