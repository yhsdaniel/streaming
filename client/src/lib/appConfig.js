const backEndURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'
export const title = {
    popularMovies: 'Top Popular Movies',
    topRatedMovies: 'Top Rated Movies',
    UpcomingMovies: 'Upcoming Movies',
    popularTVSeries: 'Popular TV Series',
    trendingTVSeries: 'Top Trending TV Series',
    topratedTVSeries: 'Top Rated TV Series',
}

export const apiMovies = {
    popularMovies: `${backEndURL}/requestPopularMovies`,
    topRatedMovies: `${backEndURL}/requestTopRatedMovies`,
    UpcomingMovies: `${backEndURL}/requestUpcomingMovies`,
    popularTVSeries: `${backEndURL}/requestPopularTVSeries`,
    trendingTVSeries: `${backEndURL}/requestTrendingTVSeries`,
    topratedTVSeries: `${backEndURL}/requestTopRatedTVSeries`,
    requestAllDay: `${backEndURL}/requestAllDay`
}

export const typeFilms = {
    movie: 'movie',
    tv: 'tv'
}