import React from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import LoginPage from './pages/LoginPage'
import Toolbar from './components/Toolbar'
import { Route, Switch } from 'react-router-dom'

export default function App() {
	return (
		<div className='App'>
			<Toolbar />
			<Switch>
				<Route path='/login' component={LoginPage} />
				<Route path='/post/:id' component={PostPage} />
				<Route component={HomePage} />
			</Switch>
		</div>
	)
}
