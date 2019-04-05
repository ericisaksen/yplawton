import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Contact extends Component  {
  constructor () {
    super()
    this.state = {
      Field1: "",
      Field2: "",
      Field3: ""
    }

    this.handleEntries = this.handleEntries.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEntries = (e) => {
    let inputName = e.target.name;
    this.setState({[inputName]: e.target.value})
  }
  handleSubmit = (e) => { 
    e.preventDefault();
    fetch('https://fishbowl.wufoo.com/api/v3/forms/xpt7bdy16tekak/entries.json', {
      method: 'post',
      headers: {

      },
      auth: {
        username: 'XJ7D-2ZK4-QTCX-7BYN',
        'sendImmediately': true
      },
      form: {
        'Field1' : this.state.Field1,
        'Field2' : this.state.Field2,
        'Field3' : this.state.Field3
      }
    }).then(res => {
      console.log(res);
    }).catch(error => {
      console.log('Fail: ' + error);
    })
  }
  render(){
    return(
      <>
        <Helmet
          title="Contact | Young Professionals of Lawton"
          />
          <div className="title-container">
            <h1>Contact Us</h1>
          </div>
          <div className="wrap">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="cellGrid">
                <div className="cell">
                  <p><label htmlFor="yourName">Your Name</label><br/><input id="yourName" type="text" name="Field1" onChange={this.handleEntries.bind(this)} /><br />{this.state.Field1}</p>
                </div>
                <div className="cell">
                  <p><label htmlFor="yourEmail">Your Email Address</label><input id="yourEmail" type="text" name="Field2" onChange={this.handleEntries.bind(this)} />{this.state.Field2}</p>
                </div>
                <div className="cell full">
                  <p><label htmlFor="yourMessage">Your Message</label><textarea id="yourMessage" type="text" name="Field3" onChange={this.handleEntries.bind(this)}></textarea>{this.state.Field3}</p>
                </div>
              </div>
              <p><button className={this.state.name ? 'active' : 'inactive'}>Submit Form</button></p>
            </form>
          </div>
      </>
    )
  }
}