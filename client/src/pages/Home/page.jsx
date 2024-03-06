import Navbar from "../../components/Navbar";
import Main from "./Main";
import PopularMovies from "./PopularMovies";
import TrendingTVSeries from "./TrendingTVSeries";
import TopRatedTVSeries from "./TopRatedTVSeries";
import { motion, AnimatePresence } from 'framer-motion'

export default function Homepage() {
  const title = {
    trendingTVSeries: 'Top Trending TV Series',
    topratedSeries: 'Top Rated TV Series',
    popularMovies: 'Top Popular Movies',
  }
  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Navbar />
        <Main />
        <div className="bg-black relative">
          <PopularMovies title={title.popularMovies} />
          <TrendingTVSeries title={title.trendingTVSeries} />
          <TopRatedTVSeries title={title.topratedSeries} />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
