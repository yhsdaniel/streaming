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
	const [loading, setLoading] = useState(true)

	const navigate = useNavigate()

	const getRequestAllDay = async () => {
		setLoading(true)
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
		getUser();
		getRequestAllDay();
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
				if (response.data) {
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
					<div className="absolute -z-10 blur-md bg-black/25 h-full">
						<img src={`https://image.tmdb.org/t/p/original/${movie[0]?.backdrop_path}`} alt={movie[0]?.title} className="mix-blend-darken object-cover h-full" />
					</div>
					<div className="h-full w-full flex justify-center items-center rounded-md">
						{loading ? <div>Loading...</div> :
							<section className="bg-white/70 my-auto mx-[25%] max-[1200px]:mx-[15%] max-[900px]:mx-[10%] max-[700px]:flex-col max-[700px]:w-full rounded-lg flex justify-center items-center">
								<div className="w-6/12 max-[700px]:w-3/4 max-[700px]:hidden">
									<LazyLoadImage
										src={`https://image.tmdb.org/t/p/original/${movie[0]?.poster_path}`}
										alt={movie[0]?.title}
										className='inline w-full h-full object-cover rounded-l-lg rounded-bl-lg'
										effect="blur"
									/>
								</div>
								<div className="w-6/12 px-8 h-full max-[700px]:w-3/4 max-[700px]:px-0 max-[700px]:py-8">
									<form onSubmit={handleSubmitLogin} className="flex justify-start items-start flex-col">
										<div className="my-4 text-3xl font-bold text-gray-700"><h1>Sign In</h1></div>
										<div className="relative py-4 w-full">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 top-6 absolute text-gray-800">
												<path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
											</svg>
											<input
												type="email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												placeholder="Email address"
												className="mb-4 pl-8 py-2 w-full text-gray-800 bg-transparent border-gray-500 border-b placeholder:text-gray-500"
											/>
										</div>
										<div className="relative py-4 w-full">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 top-6 absolute text-gray-800">
												<path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
											</svg>

											<input
												type="password"
												value={pass}
												onChange={(e) => setPass(e.target.value)}
												placeholder="Password"
												className="mb-4 pl-8 py-2 w-full text-gray-800 bg-transparent border-gray-500 border-b placeholder:text-gray-500"
											/>
										</div>
										<button type="submit" className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 cursor-pointer duration-150 ease-in-out mb-4">Sign In</button>
									</form>
									{/* <div className="flex justify-center items-center w-full text-gray-700 hover:text-gray-500 mb-4 text-sm"><a href="">Forgot password?</a></div> */}
									<div className="text-gray-600 my-8 text-sm">New to Netex? <Link to='/register' className="text-blue-600 hover:text-blue-800">Sign up now</Link></div>
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
