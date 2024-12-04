import React from 'react'
import { title, apiMovies, typeFilms } from '../../lib/appConfig'

const Navbar = React.lazy(() => import('../../components/Navbar'))
const Main = React.lazy(() => import('./Main'))
const ListMovies = React.lazy(() => import('../../components/ListMovies'))

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Main />
      <>
        <ListMovies title={title.popularMovies} slidingMovie={apiMovies.popularMovies} typesOfFilms={typeFilms.movie} />
        <ListMovies title={title.trendingTVSeries} slidingMovie={apiMovies.trendingTVSeries} typesOfFilms={typeFilms.tv} />
        <ListMovies title={title.topratedTVSeries} slidingMovie={apiMovies.topratedTVSeries} typesOfFilms={typeFilms.tv} />
      </>
    </>
  )
}
