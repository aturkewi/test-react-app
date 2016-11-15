import React, { Component } from 'react';
import {Link} from 'react-router'
// import './App.css';``

class App extends Component {
  
  render() {
    return(
      <div>
        <div>
          <Link 
            to="/"
            onlyActiveOnIndex={true}>
            Home
          </Link> | 
          <Link to="/about">About</Link> | 
          <Link to="/gliphies">Gliphies</Link>  
        </div>
        {this.props.children}
      </div>
    )
  }
  
}

export default App