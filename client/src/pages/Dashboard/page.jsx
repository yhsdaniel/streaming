import React, { useCallback, useEffect, useState } from 'react'
import { title, apiMovies, typeFilms } from '../../lib/appConfig'
import axios from 'axios'
import Footer from '../../components/container/Footer'
import Loading from '../../components/ui/Loading'

const Navbar = React.lazy(() => import('../../components/container/Navbar'))
const Main = React.lazy(() => import('./Main'))
const ListMovies = React.lazy(() => import('../../components/container/ListMovies'))

export default function Homepage() {
  const [isLoading, setIsLoading] = useState(false)
  const [movie, setMovie] = useState({
    popularMovies: [],
    trendingTVSeries: [],
    topratedTVSeries: [],
  })

  const apiURL = useCallback(async () => {
    try {
      const [popularRes, trendinRes, topRatedRes] = await Promise.all([
        axios.get(apiMovies.popularMovies),
        axios.get(apiMovies.trendingTVSeries),
        axios.get(apiMovies.topratedTVSeries),
      ])

      setMovie({
        popularMovies: popularRes.data,
        trendingTVSeries: trendinRes.data,
        topratedTVSeries: topRatedRes.data,
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    apiURL();
  }, [])

  return (
    <>
      <React.Suspense fallback={<Loading />}>
        <>
          <Navbar />
          <Main />
          <>
            <ListMovies title={title.popularMovies} movie={movie.popularMovies} typesOfFilms={typeFilms.movie} />
            <ListMovies title={title.trendingTVSeries} movie={movie.trendingTVSeries} typesOfFilms={typeFilms.tv} />
            <ListMovies title={title.topratedTVSeries} movie={movie.topratedTVSeries} typesOfFilms={typeFilms.tv} />
          </>
        </>
        <Footer />
      </React.Suspense>
    </>
  )
}
