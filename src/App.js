
import React from "react"
import NavBar from "./components/NavBar/NavBar"

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
      </Router>
    </div>
  )
}

export default App
