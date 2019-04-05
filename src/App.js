import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './components/pages/homepage.js';
import About from './components/pages/about.js';
import Membership from './components/pages/membership.js';
import Leaders from './components/pages/leaders.js';
import Events from './components/pages/events.js';
import Contact from './components/pages/contact.js';
import NotFound from './components/pages/notfound.js';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={1250}
            classNames="fade"
          >
          <Switch location={location}>
            <Route exact path="/" component={Homepage}/>
            <Route path="/about" component={About}/>
            <Route path="/membership" component={Membership}/>
            <Route path="/leaders" component={Leaders}/>
            <Route path="/events" component={Events}/>
            <Route path="/contact" component={Contact}/>
            <Route path="*" component={NotFound}/>
          </Switch>
          </CSSTransition>
        </TransitionGroup>
        )} />
        <Footer/>
      </div>
    );
  }
}

export default App;
