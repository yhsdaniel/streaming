import { Router } from 'express'
import axios from 'axios'

const router = Router()

const key = 'b5dc2ae423fdfd220737f5f979a6c7c1'

router.get('/requestPopularMovies', async (_req, res) => {
    try {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`).then(response => {
            res.status(200).json(response.data.results)
        })
    } catch (error) {
        console.log(error)
    }
})

router.get('/requestTopRatedTVSeries', async (_req, res) => {
    try {
        axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`).then(response => {
            res.status(200).json(response.data.results)
        })
    } catch (error) {
        console.log(error)
    }
})

router.get('/requestTrendingTVSeries', async (_req, res) => {
    try {
        axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${key}&language=en-US`).then(response => {
            res.status(200).json(response.data.results)
        })
    } catch (error) {
        console.log(error)
    }
})

router.get('/requestAllDay', async (_req, res) => {
    try {
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US`).then(response => {
            res.status(200).json(response.data.results)
        })
    } catch (error) {
        console.log(error)
    }
})

export default router