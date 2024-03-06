import Navbar from "../../components/Navbar";
import Main from "../Home/Main";
import PopularMovies from "../Home/PopularMovies";
import { motion, AnimatePresence } from 'framer-motion'

export default function MoviePage() {
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
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
