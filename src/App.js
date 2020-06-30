
import React from "react"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

import { Router, Route, Switch } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"
import Schedule from "./views/Schedule"
import Travel from "./views/Travel"
// import ThingsToDo from "./views/ThingsToDo"
// import FAQ from "./views/FAQ"
import Home from "./views/Home"
import Rsvp from "./views/Rsvp"
import { NotFound } from "./views/Error"
import history from "./utils/history"

function App() {
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
            {/* <Route exact path={"/things-to-do"} component={ThingsToDo} /> */}
            {/* <Route exact path={"/faq"} component={FAQ} /> */}
            <PrivateRoute path="/rsvp" component={Rsvp} />
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
