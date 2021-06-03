import React from 'react'
import { AppBase } from './App.style'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {About, Blog, Home, Post, UnderConstruction, Vacancy} from './views'
import { Navigation, TopNavigation } from './layouts/Main/components'
import ContactUs from './views/ContactUs/ContactUs'
import Shop from './views/Shop/Shop'
import Login from "./views/Login";

const App: React.FC = () => {
	return (
		<AppBase>
			<Router>
				<Switch>

					{/* login */}
					<Route path={'/login'}>
						<Login />
					</Route>

					<Route path={'/about'}>
						<TopNavigation />
						<Navigation />
						<About />
					</Route>
					<Route path={'/contact'}>
						<TopNavigation />
						<Navigation />
						<ContactUs />
					</Route>
					<Route path={'/blog'}>
						<TopNavigation />
						<Navigation />
						<Blog />
					</Route>

					<Route path={'/post'}>
						<TopNavigation />
						<Navigation />
						<Post />
					</Route>

					<Route path={'/shop'}>
						<TopNavigation />
						<Navigation />
						<UnderConstruction />
					</Route>

					<Route path={'/vacancy'}>
						<TopNavigation />
						<Navigation />
						<Vacancy />
					</Route>

					<Route path={'/underconstruction'}>
						<TopNavigation />
						<Navigation />
						<UnderConstruction />
					</Route>

					{/* Home */}
					<Route path={'/'}>
						<TopNavigation />
						<Navigation />
						<Home />
					</Route>

				</Switch>
			</Router>
		</AppBase>
	)
}
export default App
