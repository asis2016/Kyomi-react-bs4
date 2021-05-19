import React from 'react'
import { AppBase } from './App.style'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { About, Blog, Home } from './views'
import { Navigation, TopNavigation } from './layouts/Main/components'

const App: React.FC = () => {
	return (
		<AppBase>
			<Router>
				<TopNavigation />
				<Navigation />
				<Switch>
					<Route path={'/about'}>
						<About />
					</Route>
					<Route path={'/blog'}>
						<Blog />
					</Route>
					<Route path={'/'}>
						<Home />
					</Route>
				</Switch>
			</Router>
		</AppBase>
	)
}
export default App
