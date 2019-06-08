import React from "react"
import AdminBase from "../admin/components/Base"
import ClientRoutes from "../client/components/Routes"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={AdminBase} />
        <Route component={ClientRoutes} />
      </Switch>
    </Router>
  )
}

export default App;