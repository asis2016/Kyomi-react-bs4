import React from 'react'
import { AppBase } from './App.style'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { About, Blog, Home, Post, Vacancy } from './views'
import { Navigation, TopNavigation } from './layouts/Main/components'
import ContactUs from './views/ContactUs/ContactUs'
import Shop from './views/Shop/Shop'

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
					<Route path={'/contact'}>
						<ContactUs />
					</Route>
					<Route path={'/blog'}>
						<Blog />
					</Route>
					<Route path={'/post'}>
						<Post />
					</Route>
					<Route path={'/shop'}>
						<Shop />
					</Route>
					<Route path={'/vacancy'}>
						<Vacancy />
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
