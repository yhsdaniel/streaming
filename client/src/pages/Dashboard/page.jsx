import Navbar from "../../components/Navbar";
import Main from "./Main";
import { title, apiMovies, typeFilms } from '../../lib/appConfig'

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
