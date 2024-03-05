const key = 'b5dc2ae423fdfd220737f5f979a6c7c1'

const requests = {
    requestPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRatedTVSeries: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrendingTVSeries: `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}&language=en-US`,
    requestAllDay: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US`
}

export default {requests, key}