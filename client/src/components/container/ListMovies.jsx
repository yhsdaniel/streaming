/* eslint-disable react/prop-types */
import { createContext, useCallback, useEffect, useState } from 'react';
import axios from 'axios'
import Sliding from '../ui/Sliding';

export const ListMovieContext = createContext()

export default function ListMovies({ title, movie, typesOfFilms }) {
	return (
		<div className='-translate-y-24'>
			<div className='py-4 px-11 max-[1024px]:px-0 overflow-hidden'>
				<h1 className='text-2xl my-4 max-[1024px]:px-4 max-[600px]:text-lg'>{title}</h1>
				<ListMovieContext.Provider value={movie}>
					<Sliding types={typesOfFilms} />
				</ListMovieContext.Provider>
			</div>
		</div>
	)
}
