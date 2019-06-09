import React from "react"
import { Route, Switch } from 'react-router-dom';
import Start from "../Start"
import RecipientBio from "../RecipientBio"
import Donate from "../Donate"

const Routes = () => {
  return (
    <Switch>
      <Route path="/start/:person" component={Start} />
      <Route path="/recipient-bio/:person" component={RecipientBio} />
      <Route path="/donate/:person" component={Donate} />
    </Switch>
  )
}

export default Routes;