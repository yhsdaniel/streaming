import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Dashboard/page'
import MoviePage from './pages/Dashboard/Movies/MoviePage'
import TVshowPage from './pages/Dashboard/TVshow/TvShowPage'

function App() {

	return (
		<Routes>
			{/* <Route path='/' exact element={<Loginpage />} />
			<Route path='/register' element={<RegisterPage />} /> */}
			<Route path='/' exact element={<Homepage />} />
			<Route path='/movies' element={<MoviePage />} />
			<Route path='/tvshows' element={<TVshowPage />} />
		</Routes>
	)
}

export default App
