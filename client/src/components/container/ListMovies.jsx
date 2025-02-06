/* eslint-disable react/prop-types */
import { createContext, useCallback, useEffect, useState } from 'react';
import axios from 'axios'
import Sliding from '../ui/Sliding';

export const ListMovieContext = createContext()

export default function ListMovies(props) {
	const [movie, setMovie] = useState([])
	const apiURL = useCallback(async () => {
		try {
			// eslint-disable-next-line react/prop-types
			await axios.get(props.slidingMovie).then(response => {
				setMovie(response.data)
			})
		} catch (error) {
			console.log(error)
		}
	}, [props.slidingMovie])
	useEffect(() => {
		apiURL();
	}, [])

	return (
		<div className='-translate-y-24'>
			<div className='py-4 px-11 max-[1024px]:px-0 overflow-hidden'>
				<h1 className='text-2xl my-4 max-[1024px]:px-4 max-[600px]:text-lg'>{props.title}</h1>
				<ListMovieContext.Provider value={movie}>
					<Sliding types={props.typesOfFilms} />
				</ListMovieContext.Provider>
			</div>
		</div>
	)
}
