import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

export default class Events extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
      isLoading: true
    };
  }
  componentDidMount(){
    const apiRequest = "https://sheets.googleapis.com/v4/spreadsheets/1gr6TFvGB9GYKLuULDq_6_B2CuSsL-25uaGNbLZgJ5vI/values:batchGet?ranges=events&majorDimension=ROWS&key=AIzaSyArsS0zw7WJalhAw49sXtcmbkvD0KHUbUw";
      fetch(apiRequest).then(response => response.json()).then(data => {
       let batchRowValues = data.valueRanges[0].values;
       const rows = [];
       for (let i = 1; i < batchRowValues.length; i++) {
         let rowObject = {};
         for (let j = 0; j < batchRowValues[i].length; j++) {
           rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
         }
         rows.push(rowObject);
       }
       this.setState({ items: rows, isLoading: false });
     });
     console.log(this.state.items);
  }
  render(){
    let events;
    if(this.state.isLoading === true){
      events = "Loading";
    } else {
      events = this.state.items.map((item) =>
      <div className="cell one-third">
        <div>
          <h2>{item.event_title}</h2>
          <p>{item.event_date}, {item.event_time}<br />
          {item.event_location}</p>
          <div dangerouslySetInnerHTML={{__html: item.event_details}}></div>
        </div>
      </div>);
    }
    return(
      <>
        <Helmet
          title="Events | Young Professionals of Lawton"
          />
          <div className="title-container">
            <h1>Events</h1>
          </div>
          <div className="wrap text-center">
            <div className="cellGrid eventContainer">
              {events}
            </div>
          </div>
      </>
    )
  }
}