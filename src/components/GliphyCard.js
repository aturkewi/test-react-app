import React from 'react';
import {Link} from 'react-router'
// import './App.css';``

const GliphyCard = (props) => {
  console.log(props)
  return (
    <div>
      <Link to={{ pathname: `/gliphies/${props.gliphy.id}` }}><img src={props.gliphy.images.fixed_height_small.url} /></Link>
    </div>
  )
}

export default GliphyCard