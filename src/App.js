import React from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { Route, Switch } from 'react-router-dom'

export default function App() {
	return (
		<div className='App'>
			<Switch>
				<Route component={HomePage} />
			</Switch>
		</div>
	)
}
