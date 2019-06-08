import React from "react"
import { Route, Switch } from 'react-router-dom';
import Login from "../Login"
import Register from "../Register"
import { Provider } from '../Context'

import "../../sass/main.scss"

const Routes = () => {
  return (
    <Provider>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
    </Provider>
  )
}

export default Routes;