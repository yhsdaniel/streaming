import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Homepage from './pages/Dashboard/page'
import Loginpage from './pages/Login/page'
import RegisterPage from './pages/Register/page'
import MoviePage from './pages/Movies/page'
import TVshowPage from './pages/TVshow/page'
import { useEffect } from 'react'

function App() {
	
	return (
		<Routes>
			<Route path='/' exact element={<Loginpage />} />
			<Route path='/register' element={<RegisterPage />} />
			<Route path='/dashboard' element={<Homepage />} />
			<Route path='/movies' element={<MoviePage />} />
			<Route path='/tvshows' element={<TVshowPage />} />
		</Routes>
	)
}

export default App
