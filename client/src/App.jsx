import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

const HomePage = React.lazy(() => import('./pages/Dashboard/page'))
const MoviePage = React.lazy(() => import('./pages/Dashboard/Movies/MoviePage'))
const TVshowPage = React.lazy(() => import('./pages/Dashboard/TVshow/TvShowPage'))

function App() {

	return (
		<Routes>
			{/* <Route path='/' exact element={<Loginpage />} />
			<Route path='/register' element={<RegisterPage />} /> */}
			<Route path='/' exact element={<HomePage />} />
			<Route path='/movies' element={<MoviePage />} />
			<Route path='/tvshows' element={<TVshowPage />} />
		</Routes>
	)
}

export default App
