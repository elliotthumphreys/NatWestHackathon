import React from "react"
import { Route, Switch } from 'react-router-dom';
import Start from "../Home"
import { ContentProvider, HatsProvider } from '../Context'

import "../../sass/main.scss"

const Routes = () => {
  return (
    <ContentProvider>
      <HatsProvider>
        <Switch>
          <Route path="/start" component={Start} />
        </Switch>
      </HatsProvider>
    </ContentProvider>
  )
}

export default Routes;