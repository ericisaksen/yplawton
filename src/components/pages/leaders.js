import React, {Component} from 'react';
import {Helmet} from 'react-helmet';


export default class Leaders extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
      isLoading: true
    };
  }
  componentDidMount(){
    const apiRequest = "https://sheets.googleapis.com/v4/spreadsheets/1gr6TFvGB9GYKLuULDq_6_B2CuSsL-25uaGNbLZgJ5vI/values:batchGet?ranges=leadership&majorDimension=ROWS&key=AIzaSyArsS0zw7WJalhAw49sXtcmbkvD0KHUbUw";
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
  }
  render(){
    let leadershipTeam;
    if(this.state.isLoading === true){
      leadershipTeam = "Loading";
    } else {
     leadershipTeam = this.state.items.map((item) =>
      <div className="cell one-fourth">
      <img src={item.headshot_url ? item.headshot_url : '//placehold.it/500x500?text=Placeholder Photo'} alt={item.first_name + ' ' + item.last_name + ' Headshot'} />
      <h2>{item.first_name} {item.last_name}</h2><h3>{item.company}</h3> </div>);
    }
    return(
      <>
        <Helmet
          title="Leadership | Young Professionals of Lawton"
          />
          <div className="title-container">
            <h1>Leaders</h1>
          </div>
          <div className="wrap">
            <div className="leadershipTeam cellGrid jc text-center">
              {leadershipTeam}
            </div>
          </div>
      </>
    )
  }
}