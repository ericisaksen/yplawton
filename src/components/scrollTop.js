import { Component } from 'react';
import {withRouter} from 'react-router-dom';

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        setTimeout(function(){
            if (this.props.location !== prevProps.location) {
                window.scrollTo(0, 0)
            }
        }.bind(this), 500)
    }
  
    render() {
      return this.props.children
    }
  }
  
  export default withRouter(ScrollToTop)