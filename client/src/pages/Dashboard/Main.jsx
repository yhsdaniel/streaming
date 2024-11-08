import { useEffect, useState } from "react"
import axios from 'axios'
import Modal from "../../components/Modal"
import { useNavigate } from "react-router-dom"

export default function Main() {
    const [movie, setMovie] = useState('')
    const movies = movie[Math.floor(Math.random() * movie.length)]
    const urlImage = `https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`
    const navigate = useNavigate()

    const getPopularMovie = async () => {
        try {
            await axios.get(`${import.meta.env.VITE_BACKEND_URL}/requestAllDay`).then((response => {
                setMovie(response.data)
            }))
        } catch (error) {
            console.log(error)
        }
    }

    const getUser = async () => {
        try {
            await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user`, {
                withCredentials: true,
            }).then((response) => {
                if (response.status !== 200) {
                    navigate('/')
                }
            })
        } catch (error) {
            if (error) {
                navigate('/')
            }
        }
    }

    useEffect(() => {
        Promise.all([
            getPopularMovie(),
            // getUser()
        ])
    }, [])

    if (!movies) return null

    return (
        <div style={{ backgroundImage: `url(${urlImage})` }} className="w-full h-screen max-[1024px]:h-[30rem] relative flex justify-start items-center bg-center bg-cover">
            <div className="absolute w-full h-full bg-gradient-to-r from-black"></div>
            <div className="absolute py-4 px-11 max-[1024px]:px-4 w-5/12 max-[1024px]:w-full flex flex-col">
                <div className="text-white w-full">
                    {/* <h1 className="text-6xl my-6 animate-title max-[600px]:text-3xl">{movies?.original_title}</h1>
                    <p className="line-clamp-2 animate-overview">{movies?.overview}</p> */}
                    <h1 className="text-[4rem] my-6 max-[1024px]:text-3xl">{movies?.original_title || movies?.original_name}</h1>
                    <div className='flex justify-center items-start my-4 h-8'>
                        <h1 className="w-6/12 h-full text-xl max-[1024px]:text-xl"><span className="fa fa-star text-orange-300"></span> {movies?.vote_average.toFixed(1)} / 10</h1>
                        <p className='flex-1 text-sm h-full'>Release date: {movies?.release_date || movies?.first_air_date}</p>
                    </div>
                    <p className="line-clamp-2 max-[600px]:text-base">{movies?.overview}</p>
                </div>
                <div className="flex mt-8">
                    <Modal
                        labelModal={true}
                        id={movies?.id}
                        title={movies?.title}
                        overview={movies?.overview}
                        date={movies?.release_date}
                        image={`https://image.tmdb.org/t/p/original/${movies?.poster_path}`}
                        runtime={movies?.runtime}
                        typesFilm={'movie'}
                    />
                </div>
            </div>
            <div className="absolute bg-gradient-to-t from-[#1a1a1a] bottom-0 h-40 w-full"></div>
        </div>
    )
}
