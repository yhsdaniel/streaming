import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Homepage from './pages/Home/page'
import Loginpage from './pages/Login/page'
import RegisterPage from './pages/Register/page'
import MoviePage from './pages/Movies/page'
import TVshowPage from './pages/TVshow/page'
import { useEffect } from 'react'

function App() {
	const navigate = useNavigate()
	const getUser = async () => {
		try {
			await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user`, {
				withCredentials: true,
			})
		} catch (error) {
			if (error) {
				navigate('/')
			}
		}
	}

	useEffect(() => {
		getUser()
	}, [])
	
	return (
		<Routes>
			<Route path='/' index element={<Loginpage />} />
			<Route path='/register' element={<RegisterPage />} />
			<Route path='/home' element={<Homepage />} />
			<Route path='/movies' element={<MoviePage />} />
			<Route path='/tvshows' element={<TVshowPage />} />
		</Routes>
	)
}

export default App
