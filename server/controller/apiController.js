import axios from 'axios'

const key = 'b5dc2ae423fdfd220737f5f979a6c7c1'

const requestAllDay = `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US`

const requestTopRatedTVSeries = `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`
const requestTrendingTVSeries = `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}&language=en-US`
const requestPopularTVSeries = `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`

const requestNowPlayingMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`
const requestPopularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
const requestTopRatedMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`
const requestUpcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`

const apiController = {
    async requestPopularMovies(req, res){
        try {
            await axios.get(requestPopularMovies).then(response => {
                res.status(200).json(response.data.results)
            })
        } catch (error) {
            console.log(error)
        }
    },

    async requestTopRatedTVSeries(req, res){
        try {
            await axios.get(requestTopRatedTVSeries).then(response => {
                res.status(200).json(response.data.results)
            })
        } catch (error) {
            console.log(error)
        }
    },
    
    async requestTrendingTVSeries(req, res){
        try {
            await axios.get(requestTrendingTVSeries).then(response => {
                res.status(200).json(response.data.results)
            })
        } catch (error) {
            console.log(error)
        }
    },

    async requestPopularTVSeries(req, res){
        try {
            await axios.get(requestPopularTVSeries).then(response => {
                res.status(200).json(response.data.results)
            })
        } catch (error) {
            console.log(error)
        }
    },

    async requestAllDay(req, res){
        try {
            await axios.get(requestAllDay).then(response => {
                res.status(200).json(response.data.results)
            })
        } catch (error) {
            console.log(error)
        }
    },
    
    async requestTopRatedMovies(req, res){
        try {
            await axios.get(requestTopRatedMovies).then(response => {
                res.status(200).json(response.data.results)
            })
        } catch (error) {
            console.log(error)
        }
    },

    async requestUpcomingMovies(req, res){
        try {
            await axios.get(requestUpcomingMovies).then(response => {
                res.status(200).json(response.data.results)
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export { apiController }