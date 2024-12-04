import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { title, apiMovies, typeFilms } from '../../../lib/appConfig'

const Navbar = React.lazy(() => import('../../../components/Navbar'))
const Main = React.lazy(() => import('../Main'))
const ListMovies = React.lazy(() => import('../../../components/ListMovies'))

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
                <>
                    <ListMovies title={title.popularMovies} slidingMovie={apiMovies.popularMovies} typesOfFilms={typeFilms.movie} />
                    <ListMovies title={title.topRatedMovies} slidingMovie={apiMovies.topRatedMovies} typesOfFilms={typeFilms.movie} />
                    <ListMovies title={title.UpcomingMovies} slidingMovie={apiMovies.UpcomingMovies} typesOfFilms={typeFilms.movie} />
                </>
            </motion.div>
        </AnimatePresence>
    )
}
