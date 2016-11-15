import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Components
import App from './components/App'
import Home from './components/Home'
import Gliphies from './components/Gliphies'
import Gliphy from './components/Gliphy'
import About from './components/About'

export default (
  <Route 
    path="/"
    // App really just sets initial state type of stuff
    component={App}>
    <IndexRoute
      component={Home} />
    <Route
      path="/gliphies"
      component={Gliphies}>
      <Route 
        path="/gliphies/:gliphyId"
        component={Gliphy} />
    </Route>
    <Route 
      path="/about"
      component={About} />
  </Route>
)