import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { title, apiMovies, typeFilms } from '../../../lib/appConfig'

const Navbar = React.lazy(() => import('../../../components/Navbar'))
const Main = React.lazy(() => import('../Main'))
const ListMovies = React.lazy(() => import('../../../components/ListMovies'))

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
                <>
                    <ListMovies title={title.popularTVSeries} slidingMovie={apiMovies.popularTVSeries} typesOfFilms={typeFilms.tv} />
                    <ListMovies title={title.trendingTVSeries} slidingMovie={apiMovies.trendingTVSeries} typesOfFilms={typeFilms.tv} />
                    <ListMovies title={title.topratedTVSeries} slidingMovie={apiMovies.topratedTVSeries} typesOfFilms={typeFilms.tv} />
                </>
            </motion.div>
        </AnimatePresence>
    )
}
