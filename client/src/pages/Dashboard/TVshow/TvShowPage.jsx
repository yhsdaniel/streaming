import React, { startTransition, useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { title, apiMovies, typeFilms } from '../../../lib/appConfig'
import Loading from '../../../components/ui/Loading'
import axios from 'axios';

const Navbar = React.lazy(() => import('../../../components/container/Navbar'))
const Main = React.lazy(() => import('../Main'))
const ListMovies = React.lazy(() => import('../../../components/container/ListMovies'))

export default function TVshowPage() {
    const [movie, setMovie] = useState({
        popularTVSeries: [],
        trendingTVSeries: [],
        topratedTVSeries: [],
    })
    const [isLoading, setIsLoading] = useState(false)

    const apiURL = async () => {
        setIsLoading(true)
        try {
            const [popularRes, trendingRes, topRatedRes] = await Promise.all([
                axios.get(apiMovies.popularTVSeries),
                axios.get(apiMovies.trendingTVSeries),
                axios.get(apiMovies.topratedTVSeries),
            ])

            setMovie({
                popularTVSeries: popularRes.data,
                trendingTVSeries: trendingRes.data,
                topratedTVSeries: topRatedRes.data,
            })
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        startTransition(() => apiURL())
    }, [])

    return (
        <>
            {isLoading
                ? <Loading />
                : <motion.div
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <Navbar />
                    <Main />
                    <>
                        <ListMovies title={title.popularTVSeries} movie={movie.popularTVSeries} typesOfFilms={typeFilms.tv} />
                        <ListMovies title={title.trendingTVSeries} movie={movie.trendingTVSeries} typesOfFilms={typeFilms.tv} />
                        <ListMovies title={title.topratedTVSeries} movie={movie.topratedTVSeries} typesOfFilms={typeFilms.tv} />
                    </>
                </motion.div>
            }
        </>
    )
}
