import React, { Component } from 'react';
import { Link } from 'react-router'
import GliphyCard from './GliphyCard'
// import './App.css';``

class Gliphies extends Component {
  constructor() {
    super() 
    this.state = {
      
      gliphies: [],
      loading: true
    }
  }
  
  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC')
            .then((response) => response.json())
            .then((json) => this.setState({
                gliphies: json.data,
                loading: false
            }))
  }
  
  render() {
    const { children } = this.props
    const { gliphies } = this.state
    return (
      <div>
        {!children ?
          <div>
            {gliphies.map((gliphy, index) =>
              <GliphyCard key={index} gliphy={gliphy} />
            )}
          </div>
          :
          <div>
            {children}
          </div>
        }
      </div>
    )
  }
  
}

export default Gliphies