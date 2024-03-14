import axios from 'axios'

const key = 'b5dc2ae423fdfd220737f5f979a6c7c1'
const requestPopularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
const requestTopRatedTVSeries = `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`
const requestTrendingTVSeries = `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}&language=en-US`
const requestAllDay = `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US`

const apiController = {
    async requestPopularMovies(req, res){
        try {
            axios.get(requestPopularMovies).then(response => {
                res.status(200).json(response.data.results)
            })
        } catch (error) {
            console.log(error)
        }
    },

    async requestTopRatedTVSeries(req, res){
        try {
            axios.get(requestTopRatedTVSeries).then(response => {
                res.status(200).json(response.data.results)
            })
        } catch (error) {
            console.log(error)
        }
    },
    
    async requestTrendingTVSeries(req, res){
        try {
            axios.get(requestTrendingTVSeries).then(response => {
                res.status(200).json(response.data.results)
            })
        } catch (error) {
            console.log(error)
        }
    },

    async requestAllDay(req, res){
        try {
            axios.get(requestAllDay).then(response => {
                res.status(200).json(response.data.results)
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export { apiController }