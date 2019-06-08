import React from "react"
import { Route, Switch } from 'react-router-dom';
import Start from "../Start"
import RecipientBio from "../RecipientBio"
import { Provider } from '../Context'

import "../../sass/main.scss"

const Routes = () => {
  return (
    <Provider>
        <Switch>
          <Route path="/start" component={Start} />
          <Route path="/recipient-bio" component={RecipientBio} />
        </Switch>
    </Provider>
  )
}

export default Routes;