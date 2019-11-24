import React from 'react'
import { Router, Route } from 'react-router-dom'
import HomePage from './pages/home'
import AlikesPage from './pages/alikes'
import ResultsPage from './pages/results'
import JobFinder from './pages/job-finder'
import Companies from './pages/companies'
import CompaniesResults from './pages/CompanyResults'
import history from './history'
import './App.css'

class App extends React.Component {

  render() {
    return (
      <Router history={history}>
        <div >
          {/* Routes */}
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/select-alikes" component={AlikesPage}></Route>
          <Route exact path="/results" component={ResultsPage}></Route>
          <Route exact path="/job-finder" component={JobFinder}></Route>
          <Route exact path="/companies" component={Companies}></Route>
          <Route exact path="/companies-results" component={CompaniesResults}></Route>
        </div>
      </Router>
    )
  }
}

export default App
