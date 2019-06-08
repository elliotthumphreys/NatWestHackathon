import React, { Fragment } from "react"
import DonorRoutes from "../donor/components/Routes"
import RecipientsRoutes from "../recipients/components/Routes"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../shared-sass/main.scss'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route component={RecipientsRoutes} />
        <Route component={DonorRoutes} />
      </Fragment>
    </Router>
  )
}

export default App;