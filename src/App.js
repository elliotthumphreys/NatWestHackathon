import React from 'react'
import { Provider } from './util/context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StartPage from './components/Start'

const App = () => <Provider>
	<Router>
		<Switch>
			<Route path='/start' component={StartPage} />
		</Switch>
	</Router>
</Provider>

export default App;
