import React, { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { title, apiMovies, typeFilms } from '../../../lib/appConfig'
import Loading from '../../../components/ui/Loading'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Navbar = React.lazy(() => import('../../../components/container/Navbar'))
const Main = React.lazy(() => import('../Main'))
const ListMovies = React.lazy(() => import('../../../components/container/ListMovies'))

export default function MoviePage() {
    const location = useLocation()
    const [movie, setMovie] = useState({
        popularMovies: [],
        trendingTVSeries: [],
        topratedTVSeries: [],
    })
    const [isLoading, setIsLoading] = useState(false)

    const apiURL = useCallback(async () => {
        setIsLoading(true)
        try {
            const [popularRes, trendinRes, topRatedRes] = await Promise.all([
                axios.get(apiMovies.popularMovies),
                axios.get(apiMovies.trendingTVSeries),
                axios.get(apiMovies.topratedTVSeries),
            ])

            setMovie({
                popularMovies: popularRes.data,
                trendingTVSeries: trendinRes.data,
                topratedTVSeries: topRatedRes.data,
            })
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        apiURL();
    }, [location.pathname])

    return (
        <>
            {isLoading ? <Loading /> :
                <motion.div
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <Navbar />
                    <Main />
                    <>
                        <ListMovies title={title.popularTVSeries} movie={movie.popularMovies} typesOfFilms={typeFilms.tv} />
                        <ListMovies title={title.trendingTVSeries} movie={movie.trendingTVSeries} typesOfFilms={typeFilms.tv} />
                        <ListMovies title={title.topratedTVSeries} movie={movie.topratedTVSeries} typesOfFilms={typeFilms.tv} />
                    </>
                </motion.div>
            }
        </>
    )
}
