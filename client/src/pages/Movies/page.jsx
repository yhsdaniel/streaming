import Navbar from "../../components/Navbar";
import Main from "../Dashboard/Main";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import UpcomingMovies from "./UpcomingMovies";
import { motion, AnimatePresence } from 'framer-motion'

export default function MoviePage() {
    const title = {
        popularMovies: 'Top Popular Movies',
        topRatedMovies: 'Top Rated Movies',
        UpcomingMovies: 'Upcoming Movies'
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
                    <TopRatedMovies title={title.topRatedMovies} />
                    <UpcomingMovies title={title.UpcomingMovies} />
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
