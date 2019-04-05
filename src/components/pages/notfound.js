import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

export default class NotFound extends Component {
  render(){
    return(
      <>
        <Helmet
          title="Not Found | Young Professionals of Lawton"
          />
          <div className="title-container">
            <h1>404 Not Found</h1>
          </div>
          <div className="wrap text-center">
            <p>"This is not the page your looking for."</p>
          </div>
      </>
    )
  }
}