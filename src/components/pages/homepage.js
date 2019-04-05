import React from 'react';
import Hero from './home/hero';
import Helmet from 'react-helmet';
import {NavLink} from 'react-router-dom';
const Homepage = () => {
    return(
        <>
        <Helmet 
          title="Young Professionals of Lawton" 
        />
        <Hero />
        <div className="tier1">
          <div className="wrap home-wrap">
            <h2>About the Young Professionals of Lawton</h2>
            <p>Serving as a developmental hub, Young Professionals of Lawton, YPL, will connect young leaders who are interested in growing their career with the social, civic and business resources in the local community. YPL will also serve as the voice of the next generation of leaders, creating opportunities for mentors and members to work side by side to promote, advocate and serve the Lawton Fort Sill community.</p>
            <ul className="buttons">
              <li><NavLink className="button" to="#">How to Join</NavLink></li>
              <li><NavLink className="button" to="/leaders">Our Leaders</NavLink></li>
            </ul>
          </div>
        </div>
        </>
      )
}

export default Homepage;