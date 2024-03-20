import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Modal from "../../components/Modal"

export default function Main() {
    const [movie, setMovie] = useState('')
    const movies = movie[Math.floor(Math.random() * movie.length)]
    const urlImage = `https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`
    const navigate = useNavigate()

    const getPopularMovie = async () => {
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/requestAllDay`).then((response => { 
            setMovie(response.data)
        }))
    }

    const getUser = () => {
        const isAuth = document.cookie
        if(!isAuth) {
            navigate('/login')
        }
    }

    useEffect(() => {
        getPopularMovie();
        getUser();
    }, [])

    if (!movies) return null

    return (
        <div style={{ backgroundImage: `url(${urlImage})` }} className="w-full h-screen max-[1024px]:h-[30rem] relative flex justify-start items-center bg-center bg-cover">
            <div className="absolute w-full h-full bg-gradient-to-r from-black"></div>
            <div className="absolute py-4 px-11 max-[1024px]:px-4 w-5/12 max-[1024px]:w-full flex flex-col">
                <div className="text-white w-full">
                    {/* <h1 className="text-6xl my-6 animate-title max-[600px]:text-3xl">{movies?.original_title}</h1>
                    <p className="line-clamp-2 animate-overview">{movies?.overview}</p> */}
                    <h1 className="text-6xl my-6 max-[1024px]:text-3xl">{movies?.original_title}</h1>
                    <p className="line-clamp-2">{movies?.overview}</p>
                </div>
                <div className="flex mt-8">
                    <button className="bg-white px-8 py-2 text-lg text-black font-bold mr-2 flex justify-center items-center rounded cursor-pointer hover:bg-gray-300 duration-150 ease-in-out z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mr-2">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                        </svg>
                        Watch Now
                    </button>
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
