import React, { Fragment } from "react"
import DonorRoutes from "../donor/components/Routes"
import RecipientsRoutes from "../recipients/components/Routes"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from '../Context'

import '../shared-sass/main.scss'

const App = () => {
  return (
    <Provider>
      <Router>
        <Fragment>
          <Route component={RecipientsRoutes} />
          <Route component={DonorRoutes} />
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App;