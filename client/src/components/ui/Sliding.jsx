import { useEffect, useState } from 'react'
import axios from 'axios'
import Modal from '../Modal';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, HashNavigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Sliding(props) {
	const [movie, setMovie] = useState([])

	useEffect(() => {
		try {
			// eslint-disable-next-line react/prop-types
			axios.get(props.requestsAPI).then(response => {
				setMovie(response.data)
			})
		} catch (error) {
			console.log(error)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (!movie) return null

	return (
		<Swiper
			slidesPerView={8}
			spaceBetween={10}
			navigation={true}
			hashNavigation={{
				watchState: true
			}}
			breakpoints={{
				1440: {
					slidesPerView: 8,
					spaceBetween: 10
				},
				1200: {
					slidesPerView: 6,
					spaceBetween: 10
				},
				1024: {
					slidesPerView: 5,
					spaceBetween: 10
				},
				600: {
					slidesPerView: 5,
					spaceBetween: 10
				},
				450: {
					slidesPerView: 4,
					spaceBetween: 5
				},
				320: {
					slidesPerView: 3,
					spaceBetween: 5
				},
			}}
			modules={[Navigation, HashNavigation]}
			className='mySwiper'
		>	
			{movie?.map(val => (
				<SwiperSlide key={val.id} data-hash={val.id} className='cursor-pointer'>
					<Modal 
						labelModal={false}
                        id={val?.id} 
                        title={val?.title} 
                        overview={val?.overview} 
                        date={val?.release_date}
                        image={`https://image.tmdb.org/t/p/original/${val?.poster_path}`}
                        runtime={val?.runtime}
						typesFilm={props.types}
                    />
				</SwiperSlide>
			))}
		</Swiper>
	)
}