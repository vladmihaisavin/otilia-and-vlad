
import React from "react"

import Spinner from 'react-bootstrap/Spinner'
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

import { Router, Route, Switch } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"
import Schedule from "./views/Schedule"
import Travel from "./views/Travel"
import Invitation from "./views/Invitation"
import Gift from "./views/Gift"
import Gallery from "./views/Gallery"
import Home from "./views/Home"
import Rsvp from "./views/Rsvp"
import Report from "./views/Report"
import { NotFound } from "./views/Error"
import history from "./utils/history"
import { useAuth0 } from "./react-auth0-spa"

function App() {
  const { loading } = useAuth0()
  if (loading) {
    return <div style={{ 
      display: 'flex',
      flexflow: 'row nowrap',
      placeContent: 'center',
      alignItems: 'center',
      height: '100%',
      }}>
        <Spinner animation="grow" variant="primary" />
      </div>
  }
  return (
    <div className="App" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      <Router history={history}>
        <header style={{ flex: '0 0 auto' }}>
          <NavBar />
        </header>
        <div style={{ flex: '1 0 auto' }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path={"/schedule"} component={Schedule} />
            <Route exact path={"/travel"} component={Travel} />
            <Route exact path={"/invitation"} component={Invitation} />
            <Route exact path={"/gift"} component={Gift} />
            <Route exact path={"/gallery"} component={Gallery} />
            <PrivateRoute path="/rsvp" component={Rsvp} />
            <PrivateRoute path="/report" component={Report} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <footer style={{ flex: '0 0 auto' }}>
          <Footer />
        </footer>
      </Router>
    </div>
  )
}

export default App
