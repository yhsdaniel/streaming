import './App.css'
import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loading from './components/ui/Loading'

const HomePage = React.lazy(() => import('./pages/Dashboard/page'))
const MoviePage = React.lazy(() => import('./pages/Dashboard/Movies/MoviePage'))
const TVshowPage = React.lazy(() => import('./pages/Dashboard/TVshow/TvShowPage'))

function App() {

	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				{/* <Route path='/' exact element={<Loginpage />} />
				<Route path='/register' element={<RegisterPage />} /> */}
				<Route path='/' element={<HomePage />} />
				<Route path='/movies' element={<MoviePage />} />
				<Route path='/tvshows' element={<TVshowPage />} />
			</Routes>
		</Suspense>
	)
}

export default App
