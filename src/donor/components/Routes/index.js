import React from "react"
import { Route, Switch } from 'react-router-dom';
import Start from "../Home"
import { Provider } from '../Context'

import "../../sass/main.scss"

const Routes = () => {
  return (
    <Provider>
        <Switch>
          <Route path="/start" component={Start} />
        </Switch>
    </Provider>
  )
}

export default Routes;