import React from "react"
import Routes from "../donor/components/Routes"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Routes} />
      </Switch>
    </Router>
  )
}

export default App;