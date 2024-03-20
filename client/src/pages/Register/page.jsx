import { useEffect, useState } from "react"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import toast from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function RegisterPage() {
    const [movie, setMovie] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    const getRequestAllDay = async () => {
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/requestAllDay`).then(response => {
            setMovie(response.data)
            setLoading(false)
        })
    }

    const getUser = () => {
        const isAuth = document.cookie
        if (isAuth) {
            navigate('/home')
        }
    }

    useEffect(() => {
        getRequestAllDay();
        getUser();
    }, [])

    const handleSubmitRegister = (e) => {
        e.preventDefault()
        try {
            axios.post(`${import.meta.env.VITE_BACKEND_URL}/register`, { name: name, email: email, pass: pass }).then(response => {
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
                navigate('/login')
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
                    <div className="absolute -z-10 blur-md bg-black/25">
                        <img src={`https://image.tmdb.org/t/p/original/${movie[1]?.backdrop_path}`} alt={movie[1]?.title} className="mix-blend-darken" />
                    </div>
                    <div className="h-full w-full flex justify-center items-center rounded-md">
                        {loading ? <div>Loading...</div> :
                            <section className="bg-white/90 my-auto mx-[25%] max-[1200px]:mx-[15%] max-[900px]:mx-[10%] max-[700px]:flex-col max-[700px]:w-full rounded-lg flex justify-center items-center">
                                <div className="w-6/12 max-[700px]:w-3/4 max-[700px]:hidden">
                                    <LazyLoadImage
                                        src={`https://image.tmdb.org/t/p/original/${movie[0]?.poster_path}`}
                                        alt={movie[0]?.title}
                                        className='inline w-full h-full object-cover rounded-l-lg rounded-bl-lg'
                                        effect="blur"
                                    />
                                </div>
                                <div className="w-6/12 px-8 h-full max-[700px]:w-3/4 max-[700px]:px-0 max-[700px]:py-8">
                                    <form className="flex justify-start items-start flex-col" onSubmit={handleSubmitRegister}>
                                        <div className="my-4 text-3xl font-bold text-gray-700"><h1>Sign Up</h1></div>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            value={name}
                                            className="mb-4 px-3 py-2 rounded-lg w-full text-gray-800 bg-transparent border-gray-500 border placeholder:text-gray-500"
                                            // onChange={handleChange}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email address"
                                            value={email}
                                            className="mb-4 px-3 py-2 rounded-lg w-full text-gray-800 bg-transparent border-gray-500 border placeholder:text-gray-500"
                                            // onChange={handleChange}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            value={pass}
                                            className="mb-4 px-3 py-2 rounded-lg w-full text-gray-800 bg-transparent border-gray-500 border placeholder:text-gray-500"
                                            // onChange={handleChange}
                                            onChange={(e) => setPass(e.target.value)}
                                        />
                                        {/* <input
                                        type="password"
                                        placeholder="Re-enter Password"
                                        value={pass2}
                                        className="mb-4 px-3 py-2 rounded-lg w-full text-gray-800 bg-transparent border-gray-500 border placeholder:text-gray-500"
                                        // onChange={handleChange}
                                        onChange={(e) => setPass2(e.target.value)}
                                    /> */}
                                        <button type="submit" className="w-full bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 cursor-pointer duration-150 ease-in-out mb-4">Sign Up</button>
                                    </form>
                                    <div className="text-gray-600 my-8 text-sm">Already have an account? <Link to='/login' className="text-gray-700 hover:text-gray-500">Sign In</Link></div>
                                    <div className="text-gray-700 text-xs"><p>This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot. </p><a href="" className="text-blue-600">Learn more.</a></div>
                                </div>
                            </section>
                        }
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
