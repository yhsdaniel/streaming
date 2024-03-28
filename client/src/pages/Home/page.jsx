import Navbar from "../../components/Navbar";
import Main from "./Main";
import PopularMovies from "../Movies/PopularMovies";
import TrendingTVSeries from "../TVshow/TrendingTVSeries";
import TopRatedTVSeries from "../TVshow/TopRatedTVSeries";
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Homepage() {
  const title = {
    trendingTVSeries: 'Top Trending TV Series',
    topratedSeries: 'Top Rated TV Series',
    popularMovies: 'Top Popular Movies',
  }

  const navigate = useNavigate()

  const getUser = async () => {
    await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user`, {
        withCredentials: true,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(response => {
        if(!response.data){
            navigate('/login')
        } else {
            console.log(response.data)
        }
    })
  }

  useEffect(() => {
    getUser()
  }, [])
  
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
