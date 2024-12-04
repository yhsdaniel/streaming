import Navbar from "../../../components/Navbar";
import Main from "../Main";
import { motion, AnimatePresence } from 'framer-motion'
import ListMovies from "../../../components/ListMovies";
import { title, apiMovies, typeFilms } from '../../../lib/appConfig'

export default function TVshowPage() {
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
                <div>
                    <ListMovies title={title.popularTVSeries} slidingMovie={apiMovies.popularTVSeries} typesOfFilms={typeFilms.tv} />
                    <ListMovies title={title.trendingTVSeries} slidingMovie={apiMovies.trendingTVSeries} typesOfFilms={typeFilms.tv} />
                    <ListMovies title={title.topratedTVSeries} slidingMovie={apiMovies.topratedTVSeries} typesOfFilms={typeFilms.tv} />
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
