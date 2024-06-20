import Navbar from "../../../components/Navbar";
import Main from "../Main";
import ListMovies from "../../../components/ListMovies";
import { motion, AnimatePresence } from 'framer-motion'
import { title, apiMovies, typeFilms } from '../../../lib/appConfig'

export default function MoviePage() {
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
                    <ListMovies title={title.popularMovies} slidingMovie={apiMovies.popularMovies} typesOfFilms={typeFilms.movie}/>
                    <ListMovies title={title.topRatedMovies} slidingMovie={apiMovies.topRatedMovies} typesOfFilms={typeFilms.movie}/>
                    <ListMovies title={title.UpcomingMovies} slidingMovie={apiMovies.UpcomingMovies} typesOfFilms={typeFilms.movie}/>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
