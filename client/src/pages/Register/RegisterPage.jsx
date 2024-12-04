import { useCallback, useEffect, useState } from "react"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import toast from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { apiMovies } from "../../lib/appConfig"

export default function RegisterPage() {
    const [movie, setMovie] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    const getRequestAllDay = useCallback(async () => {
        await axios.get(apiMovies.requestAllDay).then(response => {
            setMovie(response.data)
            setLoading(false)
        })
    }, [apiMovies.requestAllDay])

    // const getUser = async () => {
    //     try {
    //         await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user`, {
    //             withCredentials: true,
    //         }).then((response) => {
    //             if (response.data) {
    //                 navigate('/dashboard')
    //             }
    //         })
    //     } catch (error) {
    //         if (error) {
    //             navigate('/register')
    //         }
    //     }
    // }

    useEffect(() => {
        Promise.all([
            getRequestAllDay(),
            // getUser()
        ])
    }, [])

    const handleSubmitRegister = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/register`, { name: name, email: email, pass: pass }).then(response => {
                if (response.data) {
                    toast.success('Register Successfull!', {
                        duration: 1000,
                        position: 'top-center',
                        icon: '👏',
                        style: {
                            color: 'green'
                        }
                    })
                }
                navigate('/')
                return response.data
            })
        } catch (error) {
            console.error('Error', error)
        }
    }

    if (!movie) return null

    return (
        <AnimatePresence>
            <motion.div
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <div className="h-screen w-full">
                    <header className='flex items-center justify-between py-4 px-11 z-[20] absolute w-full bg-gradient-to-b from-gray-900 to-transparent'>
                        <h1 className='text-orange-500 text-4xl cursor-default font-bold w-2/12'>NETEX</h1>
                    </header>
                    <div className="absolute -z-10 bg-black opacity-35 bg-cover block min-h-full h-full overflow-hidden">
                        <LazyLoadImage
                            src={`https://image.tmdb.org/t/p/original/${movie[0]?.backdrop_path}`}
                            alt='Image Sample'
                            className="min-h-full min-w-full object-cover"
                            effect="blur"
                            loading="lazy"
                        />
                    </div>
                    <div className="h-full w-full flex justify-center items-center rounded-md">
                        {loading ? <span className="loader"></span> :
                            <section className="bg-black/60 my-auto mx-[25%] max-[1200px]:mx-[15%] max-[900px]:mx-[10%] max-[700px]:flex-col max-[700px]:w-full rounded-lg flex justify-center items-center">
                                <div className="w-6/12 max-[700px]:w-3/4 max-[700px]:hidden">
                                    <LazyLoadImage
                                        src={`https://image.tmdb.org/t/p/original/${movie[0]?.poster_path}`}
                                        alt='Image Sample'
                                        className='inline w-full h-full object-cover rounded-l-lg rounded-bl-lg'
                                        effect="blur"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="w-6/12 px-8 h-full max-[700px]:w-3/4 max-[700px]:px-0 max-[700px]:py-8">
                                    <form className="flex justify-start items-start flex-col" onSubmit={handleSubmitRegister}>
                                        <div className="my-4 text-3xl font-bold text-white"><h1>Sign Up</h1></div>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            value={name}
                                            className="mb-4 py-2 w-full text-white bg-transparent border-gray-500 border-b placeholder:text-gray-500 duration-200 ease-in"
                                            // onChange={handleChange}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email address"
                                            value={email}
                                            className="mb-4 py-2 w-full text-white bg-transparent border-gray-500 border-b placeholder:text-gray-500 duration-200 ease-in"
                                            // onChange={handleChange}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            value={pass}
                                            className="mb-4 py-2 w-full text-white bg-transparent border-gray-500 border-b placeholder:text-gray-500 duration-200 ease-in"
                                            // onChange={handleChange}
                                            onChange={(e) => setPass(e.target.value)}
                                        />
                                        <button type="submit" className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 cursor-pointer duration-150 ease-in-out mb-4">Sign Up</button>
                                    </form>
                                    <div className="text-white my-8 text-sm">Already have an account? <Link to='/' className="text-blue-600 hover:text-blue-800">Sign In</Link></div>
                                    <div className="text-white text-xs"><p>This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot. </p><a href="" className="text-blue-600">Learn more.</a></div>
                                </div>
                            </section>
                        }
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
