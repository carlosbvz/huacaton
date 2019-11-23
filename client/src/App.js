import React from 'react'
import { Router, Route } from 'react-router-dom'
import HomePage from './pages/home'
import history from './history'
import './App.css'

class App extends React.Component {

  render() {
    return (
      <Router history={history}>
        <div >
          {/* Routes */}
          <Route exact path="/" component={HomePage}></Route>
        </div>
      </Router>
    )
  }
}

export default App
