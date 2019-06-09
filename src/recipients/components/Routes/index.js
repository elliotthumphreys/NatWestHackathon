import React from "react"
import { Route, Switch } from 'react-router-dom';
import Login from "../Login"
import Register from "../Register"
import Admin from "../Admin"
import AdminConfig from '../AdminConfig'
import Add from '../Add'
import Edit from '../Edit'
import Stats from '../Stats'

const Routes = () => {
  return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/admin/:id/add" component={Add} />
        <Route path="/admin/:id/edit" component={Edit} />
        <Route path="/admin/:id/stats" component={Stats} />
        <Route path="/admin/:id" component={AdminConfig} />
        <Route path="/admin" component={Admin} />
      </Switch>
  )
}

export default Routes;