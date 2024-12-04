import Navbar from "../../components/Navbar";
import Main from "./Main";
import { motion, AnimatePresence } from 'framer-motion'
import ListMovies from "../../components/ListMovies";
import { title, apiMovies, typeFilms } from '../../lib/appConfig'

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Main />
      <div>
        <ListMovies title={title.popularMovies} slidingMovie={apiMovies.popularMovies} typesOfFilms={typeFilms.movie} />
        <ListMovies title={title.trendingTVSeries} slidingMovie={apiMovies.trendingTVSeries} typesOfFilms={typeFilms.tv} />
        <ListMovies title={title.topratedTVSeries} slidingMovie={apiMovies.topratedTVSeries} typesOfFilms={typeFilms.tv} />
      </div>
    </>
  )
}
