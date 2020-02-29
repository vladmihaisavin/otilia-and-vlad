
import React from "react"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

import { Router, Route, Switch } from "react-router-dom"
import Rsvp from "./components/Rsvp"
import PrivateRoute from "./components/PrivateRoute"
import { NotFound } from "./components/Error"
import history from "./utils/history"

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/rsvp" component={Rsvp} />
          <Route component={NotFound} />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  )
}

export default App
