import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import WufooForm from 'react-wufoo-embed';


export default class Membership extends Component {
  constructor(){
    super();
    this.state = {
      items: []
    };
  }
  render(){
    const memberform = <WufooForm userName="lawtonmg" formHash="xa2sf8f0wnpqfs" header="hide" />;
    return(
      <>
        <Helmet
          title="Membership | Young Professionals of Lawton"
          />
          <div className="title-container">
            <h1>Membership</h1>
          </div>
          <div className="wrap">
            {memberform}
          </div>
      </>
    )
  }
}