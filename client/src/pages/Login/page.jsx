import { useEffect, useState } from "react"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import toast from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loginpage() {
	const [movie, setMovie] = useState([])
	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')
	const navigate = useNavigate()

	useEffect(() => {
		try {
			axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/requestAllDay`).then(response => {
				setMovie(response.data)
			})
		} catch (error) {
			console.error('Error', error)
		}
	}, [])

	const handleSubmitLogin = (e) => {
		e.preventDefault()
		try {
			axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/login`, { email: email, pass: pass }).then(response => {
				const { token } = response.data
				localStorage.setItem('jwtToken', token)
				toast('Login Successfull!', {
					duration: 1000,
					position: 'top-center'
				})
				navigate('/')
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
						<Link to='/' className='text-orange-500 text-4xl font-bold cursor-pointer w-2/12'>NETEX</Link>
					</header>
					<div className="absolute -z-10 blur-md bg-black/25">
						<img src={`https://image.tmdb.org/t/p/original/${movie[0]?.backdrop_path}`} alt={movie[0]?.title} className="mix-blend-darken" />
					</div>
					<div className="h-full w-full flex justify-center items-center rounded-md">
						<section className="bg-white/90 my-auto mx-[25%] max-[1200px]:mx-[15%] max-[900px]:mx-[10%] max-[700px]:flex-col max-[700px]:w-full rounded-lg flex justify-center items-center">
							<div className="w-6/12 max-[700px]:w-3/4">
								<img src={`https://image.tmdb.org/t/p/original/${movie[0]?.poster_path}`} alt={movie[0]?.title} className="w-full h-full object-cover rounded-l-lg rounded-bl-lg" loading="lazy" />
							</div>
							<div className="w-6/12 px-8 h-full max-[700px]:w-3/4">
								<form onSubmit={handleSubmitLogin} className="flex justify-start items-start flex-col">
									<div className="my-4 text-3xl font-bold text-gray-700"><h1>Sign In</h1></div>
									<input
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder="Email address"
										className="mb-4 px-3 py-2 rounded-lg w-full text-gray-800 bg-transparent border-gray-500 border placeholder:text-gray-500"
									/>
									<input
										type="password"
										value={pass}
										onChange={(e) => setPass(e.target.value)}
										placeholder="Password"
										className="mb-4 px-3 py-2 rounded-lg w-full text-gray-800 bg-transparent border-gray-500 border placeholder:text-gray-500"
									/>
									<button type="submit" className="w-full bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 cursor-pointer duration-150 ease-in-out mb-4">Sign In</button>
								</form>
								<div className="flex justify-center items-center w-full text-gray-700 hover:text-gray-500 mb-4 text-sm"><a href="">Forgot password?</a></div>
								<div className="text-gray-600 my-8 text-sm">New to Netex? <Link to='/register' className="text-gray-700 hover:text-gray-500">Sign up now</Link></div>
								<div className="text-gray-700 text-xs"><p>This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot. </p><a href="" className="text-blue-600">Learn more.</a></div>
							</div>
						</section>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	)
}
