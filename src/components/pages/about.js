import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component  {
  render(){
    return(
      <>
        <Helmet
          title="About | Young Professionals of Lawton"
          />
          <div className="title-container">
            <h1>About</h1>
          </div>
          <div className="wrap">
            <h2>Our Vision</h2>
            <p>YP Lawton will strive to connect educated, diverse, and highly-driven young professionals in Lawton Fort Sill, while promoting leadership and service, and instilling pride in our community.</p>
            <h2>Our Mission</h2>
            <p>To develop the next generation of leadership in the Lawton Fort Sill community, while continuing to enhance the image of Lawton; as a result, attracting young career bound professionals to consider Lawton as a destination for young intellectual capital.</p>
          </div>
      </>
    )
  }
}