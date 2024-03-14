import { useEffect, useState } from "react"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import toast from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Loginpage() {
	const [movie, setMovie] = useState([])
	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')
	const navigate = useNavigate()

	useEffect(() => {
		try {
			axios.get(`${import.meta.env.VITE_BACKEND_URL}/requestAllDay`).then(response => {
				setMovie(response.data)
			})
		} catch (error) {
			console.error('Error', error)
		}
	}, [])

	const handleSubmitLogin = (e) => {
		e.preventDefault()
		try {
			axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, { email: email, pass: pass }, {
				withCredentials: true,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
            }).then(response => {
				if(response.data){
					toast.success('Login Successfull!', {
						duration: 1000,
						position: 'top-center',
						icon: '👏',
						style: {
							color: 'green'
						}
					})
					navigate('/home')
				}
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
					<header className='flex items-center justify-between py-4 px-11  max-[1024px]:px-4 z-[20] absolute w-full bg-gradient-to-b from-gray-900 to-transparent'>
						<h1 className='text-orange-500 text-4xl cursor-default font-bold w-2/12'>NETEX</h1>
					</header>
					<div className="absolute -z-10 blur-md bg-black/25">
						<img src={`https://image.tmdb.org/t/p/original/${movie[0]?.backdrop_path}`} alt={movie[0]?.title} className="mix-blend-darken" />
					</div>
					<div className="h-full w-full flex justify-center items-center rounded-md">
						<section className="bg-white/90 my-auto mx-[25%] max-[1024px]:mx-[15%] max-[460px]:mx-[5%] max-[700px]:flex-col max-[700px]:w-full max-[700px]:mx-[5%] rounded-lg flex justify-center items-center">
							<div className="w-6/12 max-[700px]:w-3/4 max-[700px]:hidden">
								<LazyLoadImage
									src={`https://image.tmdb.org/t/p/original/${movie[0]?.poster_path}`}
									alt={movie[0]?.title}
									className='inline w-full h-full rounded-l-lg rounded-bl-lg aspect-[3/5] object-cover'
									effect="blur"
								/>
							</div>
							<div className="w-6/12 px-8 h-full max-[700px]:w-3/4 max-[700px]:px-0 max-[700px]:py-8">
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
