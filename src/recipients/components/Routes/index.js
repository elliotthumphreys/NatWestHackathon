import React from "react"
import { Route, Switch } from 'react-router-dom';
import Login from "../Login"
import Register from "../Register"
import Admin from "../Admin"
import AdminConfig from '../AdminConfig'

import "../../sass/main.scss"

const Routes = () => {
  return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/admin/:id" component={AdminConfig} />
        <Route path="/admin" component={Admin} />
      </Switch>
  )
}

export default Routes;