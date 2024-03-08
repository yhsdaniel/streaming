import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Home/page'
import Loginpage from './pages/Login/page'
import RegisterPage from './pages/Register/page'
import MoviePage from './pages/Movies/page'
import TVshowPage from './pages/TVshow/page'

function App() {

	return (
		<Routes>
			<Route path='/' exact element={<Loginpage />}/>
			<Route path='/login' element={<Loginpage />}/>
			<Route path='home' element={<Homepage />}/>
			<Route path='register' element={<RegisterPage />}/>
			<Route path='movies' element={<MoviePage />}/>
			<Route path='tvshows' element={<TVshowPage />}/>
		</Routes>
	)
}

export default App
