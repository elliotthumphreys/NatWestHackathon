import React from "react"
import { Route, Switch } from 'react-router-dom';
import Start from "../Start"
import RecipientBio from "../RecipientBio"
import Donate from "../Donate"
import Donated from "../Donated";

const Routes = () => {
  return (
    <Switch>
      <Route path="/start/:person" component={Start} />
      <Route path="/recipient-bio/:person" component={RecipientBio} />
      <Route path="/donate/:person/:pot" component={Donate} />
      <Route path="/donated/:person/:pot/:amount" component={Donated} />
    </Switch>
  )
}

export default Routes;